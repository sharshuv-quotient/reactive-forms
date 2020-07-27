'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const tsquery_1 = require('@phenomnomnominal/tsquery');
const fs = require('fs');
const fs_1 = require('fs');
const glob = require('glob');
const ts = require('typescript');
const ast_utils_1 = require('../utils/ast-utils');
const change_1 = require('../utils/change');
const helpers_1 = require('../utils/helpers');
const removeChanges = {};
let addChanges = {};
function addChange(path, change, arr) {
  arr[path] = arr[path] ? arr[path].concat(change) : [].concat(change);
}
function getRelevantImports(sourceFile, importSigns, host, path) {
  const allImports = ast_utils_1.findNodes(sourceFile, ts.SyntaxKind.ImportDeclaration);
  const existingImports = [];
  allImports.forEach(importNode => {
    importNode.getChildren().forEach(importClause => {
      if (importClause.kind === ts.SyntaxKind.ImportClause) {
        importClause.getChildren().forEach(c => {
          if (!c.elements) return;
          let counter = 0;
          const changes = [];
          c.elements.forEach((importSignNode, i) => {
            if (importSigns.includes(importSignNode.name.text)) {
              const nextElem = c.elements[i + 1];
              const prevElem = c.elements[i - 1];
              const startPos = prevElem ? prevElem.end : importSignNode.pos;
              let endPos = i === counter && nextElem ? nextElem.pos : importSignNode.end;
              existingImports.push(importSignNode.name.text);
              changes.push(new change_1.RemoveChange(path, startPos, endPos));
              counter++;
            }
          });
          // if there are no import signs remove the entire import node.
          if (counter === c.elements.length) {
            addChange(path, new change_1.RemoveChange(path, importNode.pos, importNode.end), removeChanges);
          } else if (changes.length) {
            addChange(path, changes, removeChanges);
          }
        });
      }
    });
  });
  return existingImports;
}
function replaceImports(filePaths, importSigns, toSource, host) {
  for (let path of filePaths) {
    const sourceText = fs.readFileSync(path, 'utf-8');
    const sourceFile = ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true);
    const relevantImports = getRelevantImports(sourceFile, importSigns, host, path);
    if (relevantImports.length) {
      addChange(path, ast_utils_1.insertImport(sourceFile, path, relevantImports.join(', '), toSource), addChanges);
    }
  }
}
function isNodeInsideImport(node) {
  if (node.parent) {
    return node.parent.kind === ts.SyntaxKind.ImportDeclaration ? true : isNodeInsideImport(node.parent);
  }
  return false;
}
function insertAnyGeneric(filePaths, classNames) {
  for (let path of filePaths) {
    let sourceText = fs.readFileSync(path, 'utf-8');
    classNames.forEach(className => {
      const query = `Identifier[name="${className}"]`;
      tsquery_1.tsquery(tsquery_1.tsquery.ast(sourceText), query).forEach((node, i) => {
        if (!isNodeInsideImport(node)) {
          // we need to do it to get the updated position.
          const n = tsquery_1.tsquery(tsquery_1.tsquery.ast(sourceText), query)[i];
          insertChange(path, n.getEnd(), '<any>');
          sourceText = fs.readFileSync(path, 'utf-8');
        }
      });
    });
  }
}
function insertChange(path, pos, insertion) {
  const file = fs_1.readFileSync(path, 'utf-8');
  fs_1.writeFileSync(path, helpers_1.splice(file, pos, pos, insertion));
}
function default_1(options) {
  return (tree, _context) => {
    return new Promise(res => {
      const controlClasses = ['FormControl', 'FormGroup', 'FormArray'];
      const importSigns = [
        ...controlClasses,
        'AbstractControl',
        'ValidatorFn',
        'AsyncValidatorFn',
        'ControlValueAccessor',
        'FormBuilder'
      ];
      glob(`${options.path}/**/*.ts`, {}, (er, files) => {
        // insertAnyGeneric(files, controlClasses);
        replaceImports(files, importSigns, '@ngneat/reactive-forms', tree);
        Object.entries(addChanges).forEach(
          ([filePath, changes]) => (tree = change_1.applyChanges(tree, filePath, changes))
        );
        Object.entries(removeChanges).forEach(([filePath, changes]) => change_1.applyChanges(tree, filePath, changes));
        res();
      });
    });
  };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
