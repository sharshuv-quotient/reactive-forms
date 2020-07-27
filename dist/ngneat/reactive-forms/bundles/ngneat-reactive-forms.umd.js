(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/core'))
    : typeof define === 'function' && define.amd
    ? define('@ngneat/reactive-forms', [
        'exports',
        '@angular/forms',
        'rxjs',
        'rxjs/operators',
        '@angular/core'
      ], factory)
    : ((global = global || self),
      factory(
        ((global.ngneat = global.ngneat || {}), (global.ngneat['reactive-forms'] = {})),
        global.ng.forms,
        global.rxjs,
        global.rxjs.operators,
        global.ng.core
      ));
})(this, function(exports, forms, rxjs, operators, core) {
  'use strict';

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  }

  var __assign = function() {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  }

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }

  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(metadataKey, metadataValue);
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  }

  function __exportStar(m, exports) {
    for (var p in m) if (p !== 'default' && !exports.hasOwnProperty(p)) exports[p] = m[p];
  }

  function __values(o) {
    var s = typeof Symbol === 'function' && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === 'number')
      return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }

  function __read(o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }

  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  }

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  }

  function __await(v) {
    return this instanceof __await ? ((this.v = v), this) : new __await(v);
  }

  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
    return (
      (i = {}),
      verb('next'),
      verb('throw'),
      verb('return'),
      (i[Symbol.asyncIterator] = function() {
        return this;
      }),
      i
    );
    function verb(n) {
      if (g[n])
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume('next', value);
    }
    function reject(value) {
      resume('throw', value);
    }
    function settle(f, v) {
      if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
    }
  }

  function __asyncDelegator(o) {
    var i, p;
    return (
      (i = {}),
      verb('next'),
      verb('throw', function(e) {
        throw e;
      }),
      verb('return'),
      (i[Symbol.iterator] = function() {
        return this;
      }),
      i
    );
    function verb(n, f) {
      i[n] = o[n]
        ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === 'return' } : f ? f(v) : v;
          }
        : f;
    }
  }

  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var m = o[Symbol.asyncIterator],
      i;
    return m
      ? m.call(o)
      : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
        (i = {}),
        verb('next'),
        verb('throw'),
        verb('return'),
        (i[Symbol.asyncIterator] = function() {
          return this;
        }),
        i);
    function verb(n) {
      i[n] =
        o[n] &&
        function(v) {
          return new Promise(function(resolve, reject) {
            (v = o[n](v)), settle(resolve, reject, v.done, v.value);
          });
        };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v) {
        resolve({ value: v, done: d });
      }, reject);
    }
  }

  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }

  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
  }

  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }

  function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError('attempted to get private field on non-instance');
    }
    return privateMap.get(receiver);
  }

  function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError('attempted to set private field on non-instance');
    }
    privateMap.set(receiver, value);
    return value;
  }

  function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function isFunction(x) {
    return typeof x === 'function';
  }
  function isNil(v) {
    return v === null || v === undefined;
  }

  function getControlValue(control) {
    if (control.getRawValue) {
      return control.getRawValue();
    }
    return control.value;
  }
  function compareErrors(a, b) {
    if (isNil(a) || isNil(b)) {
      return a === b;
    }
    return JSON.stringify(a) === JSON.stringify(b);
  }
  function controlValueChanges$(control) {
    return rxjs.merge(
      rxjs.defer(function() {
        return rxjs.of(getControlValue(control));
      }),
      control.valueChanges.pipe(
        operators.map(function() {
          return getControlValue(control);
        })
      )
    );
  }
  function controlDisabled$(control) {
    return rxjs.merge(
      rxjs.defer(function() {
        return rxjs.of(control.disabled);
      }),
      control.statusChanges.pipe(
        operators.map(function() {
          return control.disabled;
        }),
        operators.distinctUntilChanged()
      )
    );
  }
  function controlEnabled$(control) {
    return rxjs.merge(
      rxjs.defer(function() {
        return rxjs.of(control.enabled);
      }),
      control.statusChanges.pipe(
        operators.map(function() {
          return control.enabled;
        }),
        operators.distinctUntilChanged()
      )
    );
  }
  function controlStatusChanges$(control) {
    return rxjs.merge(
      rxjs.defer(function() {
        return rxjs.of(control.status);
      }),
      control.statusChanges.pipe(
        operators.map(function() {
          return control.status;
        }),
        operators.distinctUntilChanged()
      )
    );
  }
  function controlErrorChanges$(control) {
    return rxjs.merge(
      rxjs.defer(function() {
        return rxjs.of(control.errors);
      }),
      control.valueChanges.pipe(
        operators.map(function() {
          return control.errors;
        }),
        operators.distinctUntilChanged(function(a, b) {
          return compareErrors(a, b);
        })
      )
    );
  }
  function enableControl(control, enabled, opts) {
    if (enabled) {
      control.enable(opts);
    } else {
      control.disable(opts);
    }
  }
  function disableControl(control, disabled, opts) {
    enableControl(control, !disabled, opts);
  }
  function controlDisabledWhile(control, observable, opts) {
    return observable.subscribe(function(isDisabled) {
      return disableControl(control, isDisabled, opts);
    });
  }
  function controlEnabledWhile(control, observable, opts) {
    return observable.subscribe(function(isEnabled) {
      return enableControl(control, isEnabled, opts);
    });
  }
  function mergeControlValidators(control, validators) {
    control.setValidators(__spread([control.validator], coerceArray(validators)));
    control.updateValueAndValidity();
  }
  function validateControlOn(control, validation) {
    return validation.subscribe(function(maybeError) {
      control.setErrors(maybeError);
    });
  }
  function hasErrorAndTouched(control, error, path) {
    var hasError = control.hasError(error, !path || path.length === 0 ? undefined : path);
    return hasError && control.touched;
  }
  function hasErrorAndDirty(control, error, path) {
    var hasError = control.hasError(error, !path || path.length === 0 ? undefined : path);
    return hasError && control.dirty;
  }
  function markAllDirty(control) {
    control.markAsDirty({ onlySelf: true });
    control._forEachChild(function(control) {
      return control.markAllAsDirty();
    });
  }
  function selectControlValue$(control, mapFn) {
    return control.value$.pipe(operators.map(mapFn), operators.distinctUntilChanged());
  }

  var FormArray = /** @class */ (function(_super) {
    __extends(FormArray, _super);
    function FormArray(controls, validatorOrOpts, asyncValidator) {
      var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
      _this.controls = controls;
      _this.touchChanges = new rxjs.Subject();
      _this.dirtyChanges = new rxjs.Subject();
      _this.touch$ = _this.touchChanges.asObservable().pipe(operators.distinctUntilChanged());
      _this.dirty$ = _this.dirtyChanges.asObservable().pipe(operators.distinctUntilChanged());
      _this.value$ = controlValueChanges$(_this);
      _this.disabled$ = controlDisabled$(_this);
      _this.enabled$ = controlEnabled$(_this);
      _this.status$ = controlStatusChanges$(_this);
      _this.errors$ = controlErrorChanges$(_this);
      return _this;
    }
    FormArray.prototype.select = function(mapFn) {
      return this.value$.pipe(operators.map(mapFn), operators.distinctUntilChanged());
    };
    FormArray.prototype.getRawValue = function() {
      return _super.prototype.getRawValue.call(this);
    };
    FormArray.prototype.at = function(index) {
      return _super.prototype.at.call(this, index);
    };
    FormArray.prototype.setValue = function(valueOrObservable, options) {
      var _this = this;
      if (rxjs.isObservable(valueOrObservable)) {
        return valueOrObservable.subscribe(function(value) {
          return _super.prototype.setValue.call(_this, value, options);
        });
      }
      _super.prototype.setValue.call(this, valueOrObservable, options);
    };
    FormArray.prototype.patchValue = function(valueOrObservable, options) {
      var _this = this;
      if (rxjs.isObservable(valueOrObservable)) {
        return valueOrObservable.subscribe(function(value) {
          return _super.prototype.patchValue.call(_this, value, options);
        });
      }
      _super.prototype.patchValue.call(this, valueOrObservable, options);
    };
    FormArray.prototype.push = function(control) {
      return _super.prototype.push.call(this, control);
    };
    FormArray.prototype.insert = function(index, control) {
      return _super.prototype.insert.call(this, index, control);
    };
    FormArray.prototype.setControl = function(index, control) {
      return _super.prototype.setControl.call(this, index, control);
    };
    FormArray.prototype.disabledWhile = function(observable, options) {
      return controlDisabledWhile(this, observable, options);
    };
    FormArray.prototype.enabledWhile = function(observable, options) {
      return controlEnabledWhile(this, observable, options);
    };
    FormArray.prototype.mergeValidators = function(validators) {
      mergeControlValidators(this, validators);
    };
    FormArray.prototype.mergeAsyncValidators = function(validators) {
      this.setAsyncValidators(__spread([this.asyncValidator], coerceArray(validators)));
      this.updateValueAndValidity();
    };
    FormArray.prototype.markAsTouched = function(opts) {
      _super.prototype.markAsTouched.call(this, opts);
      this.touchChanges.next(true);
    };
    FormArray.prototype.markAsUntouched = function(opts) {
      _super.prototype.markAsUntouched.call(this, opts);
      this.touchChanges.next(false);
    };
    FormArray.prototype.markAsPristine = function(opts) {
      _super.prototype.markAsPristine.call(this, opts);
      this.dirtyChanges.next(false);
    };
    FormArray.prototype.markAsDirty = function(opts) {
      _super.prototype.markAsDirty.call(this, opts);
      this.dirtyChanges.next(true);
    };
    FormArray.prototype.markAllAsDirty = function() {
      markAllDirty(this);
    };
    FormArray.prototype.reset = function(value, options) {
      _super.prototype.reset.call(this, value, options);
    };
    FormArray.prototype.setValidators = function(newValidator) {
      _super.prototype.setValidators.call(this, newValidator);
      _super.prototype.updateValueAndValidity.call(this);
    };
    FormArray.prototype.setAsyncValidators = function(newValidator) {
      _super.prototype.setAsyncValidators.call(this, newValidator);
      _super.prototype.updateValueAndValidity.call(this);
    };
    FormArray.prototype.validateOn = function(observableValidation) {
      var _this = this;
      return observableValidation.subscribe(function(maybeError) {
        _this.setErrors(maybeError);
      });
    };
    FormArray.prototype.hasError = function(errorCode, path) {
      return _super.prototype.hasError.call(this, errorCode, path);
    };
    FormArray.prototype.setErrors = function(errors, opts) {
      if (opts === void 0) {
        opts = {};
      }
      return _super.prototype.setErrors.call(this, errors, opts);
    };
    FormArray.prototype.getError = function(errorCode, path) {
      return _super.prototype.getError.call(this, errorCode, path);
    };
    FormArray.prototype.hasErrorAndTouched = function(errorCode, path) {
      return hasErrorAndTouched(this, errorCode, path);
    };
    FormArray.prototype.hasErrorAndDirty = function(errorCode, path) {
      return hasErrorAndDirty(this, errorCode, path);
    };
    FormArray.prototype.setEnable = function(enable, opts) {
      if (enable === void 0) {
        enable = true;
      }
      enableControl(this, enable, opts);
    };
    FormArray.prototype.setDisable = function(disable, opts) {
      if (disable === void 0) {
        disable = true;
      }
      disableControl(this, disable, opts);
    };
    return FormArray;
  })(forms.FormArray);

  var FormControl = /** @class */ (function(_super) {
    __extends(FormControl, _super);
    function FormControl(formState, validatorOrOpts, asyncValidator) {
      var _this = _super.call(this, formState, validatorOrOpts, asyncValidator) || this;
      _this.touchChanges = new rxjs.Subject();
      _this.dirtyChanges = new rxjs.Subject();
      _this.touch$ = _this.touchChanges.asObservable().pipe(operators.distinctUntilChanged());
      _this.dirty$ = _this.dirtyChanges.asObservable().pipe(operators.distinctUntilChanged());
      _this.value$ = controlValueChanges$(_this);
      _this.disabled$ = controlDisabled$(_this);
      _this.enabled$ = controlEnabled$(_this);
      _this.status$ = controlStatusChanges$(_this);
      _this.errors$ = controlErrorChanges$(_this);
      return _this;
    }
    FormControl.prototype.setValue = function(valueOrObservable, options) {
      var _this = this;
      if (rxjs.isObservable(valueOrObservable)) {
        return valueOrObservable.subscribe(function(value) {
          return _super.prototype.setValue.call(_this, value, options);
        });
      }
      _super.prototype.setValue.call(this, valueOrObservable, options);
    };
    FormControl.prototype.patchValue = function(valueOrObservable, options) {
      var _this = this;
      if (rxjs.isObservable(valueOrObservable)) {
        return valueOrObservable.subscribe(function(value) {
          return _super.prototype.patchValue.call(_this, value, options);
        });
      }
      _super.prototype.patchValue.call(this, valueOrObservable, options);
    };
    FormControl.prototype.disabledWhile = function(observable, options) {
      return controlDisabledWhile(this, observable, options);
    };
    FormControl.prototype.enabledWhile = function(observable, options) {
      return controlEnabledWhile(this, observable, options);
    };
    FormControl.prototype.mergeValidators = function(validators) {
      mergeControlValidators(this, validators);
    };
    FormControl.prototype.mergeAsyncValidators = function(validators) {
      this.setAsyncValidators(__spread([this.asyncValidator], coerceArray(validators)));
      this.updateValueAndValidity();
    };
    FormControl.prototype.markAsTouched = function(opts) {
      _super.prototype.markAsTouched.call(this, opts);
      this.touchChanges.next(true);
    };
    FormControl.prototype.markAsUntouched = function(opts) {
      _super.prototype.markAsUntouched.call(this, opts);
      this.touchChanges.next(false);
    };
    FormControl.prototype.markAsPristine = function(opts) {
      _super.prototype.markAsPristine.call(this, opts);
      this.dirtyChanges.next(false);
    };
    FormControl.prototype.markAsDirty = function(opts) {
      _super.prototype.markAsDirty.call(this, opts);
      this.dirtyChanges.next(true);
    };
    FormControl.prototype.markAllAsDirty = function() {
      this.markAsDirty({ onlySelf: true });
    };
    FormControl.prototype.reset = function(formState, options) {
      _super.prototype.reset.call(this, formState, options);
    };
    FormControl.prototype.setValidators = function(newValidator) {
      _super.prototype.setValidators.call(this, newValidator);
      _super.prototype.updateValueAndValidity.call(this);
    };
    FormControl.prototype.setAsyncValidators = function(newValidator) {
      _super.prototype.setAsyncValidators.call(this, newValidator);
      _super.prototype.updateValueAndValidity.call(this);
    };
    FormControl.prototype.validateOn = function(observableValidation) {
      return validateControlOn(this, observableValidation);
    };
    FormControl.prototype.getError = function(errorCode) {
      return _super.prototype.getError.call(this, errorCode);
    };
    FormControl.prototype.hasError = function(errorCode) {
      return _super.prototype.hasError.call(this, errorCode);
    };
    FormControl.prototype.setErrors = function(errors, opts) {
      if (opts === void 0) {
        opts = {};
      }
      return _super.prototype.setErrors.call(this, errors, opts);
    };
    FormControl.prototype.hasErrorAndTouched = function(error) {
      return hasErrorAndTouched(this, error);
    };
    FormControl.prototype.hasErrorAndDirty = function(error) {
      return hasErrorAndDirty(this, error);
    };
    FormControl.prototype.setEnable = function(enable, opts) {
      if (enable === void 0) {
        enable = true;
      }
      enableControl(this, enable, opts);
    };
    FormControl.prototype.setDisable = function(disable, opts) {
      if (disable === void 0) {
        disable = true;
      }
      disableControl(this, disable, opts);
    };
    return FormControl;
  })(forms.FormControl);

  var FormGroup = /** @class */ (function(_super) {
    __extends(FormGroup, _super);
    function FormGroup(controls, validatorOrOpts, asyncValidator) {
      var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
      _this.controls = controls;
      _this.touchChanges = new rxjs.Subject();
      _this.dirtyChanges = new rxjs.Subject();
      _this.touch$ = _this.touchChanges.asObservable().pipe(operators.distinctUntilChanged());
      _this.dirty$ = _this.dirtyChanges.asObservable().pipe(operators.distinctUntilChanged());
      _this.value$ = controlValueChanges$(_this);
      _this.disabled$ = controlDisabled$(_this);
      _this.enabled$ = controlEnabled$(_this);
      _this.status$ = controlStatusChanges$(_this);
      _this.errors$ = controlErrorChanges$(_this);
      return _this;
    }
    FormGroup.prototype.select = function(mapFn) {
      return selectControlValue$(this, mapFn);
    };
    FormGroup.prototype.getRawValue = function() {
      return _super.prototype.getRawValue.call(this);
    };
    FormGroup.prototype.get = function(path) {
      return _super.prototype.get.call(this, path);
    };
    FormGroup.prototype.getControl = function() {
      var names = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
      }
      return this.get(names);
    };
    FormGroup.prototype.addControl = function(name, control) {
      _super.prototype.addControl.call(this, name, control);
    };
    FormGroup.prototype.removeControl = function(name) {
      _super.prototype.removeControl.call(this, name);
    };
    FormGroup.prototype.contains = function(controlName) {
      return _super.prototype.contains.call(this, controlName);
    };
    FormGroup.prototype.setControl = function(name, control) {
      _super.prototype.setControl.call(this, name, control);
    };
    FormGroup.prototype.setValue = function(valueOrObservable, options) {
      var _this = this;
      if (rxjs.isObservable(valueOrObservable)) {
        return valueOrObservable.subscribe(function(value) {
          return _super.prototype.setValue.call(_this, value, options);
        });
      }
      _super.prototype.setValue.call(this, valueOrObservable, options);
    };
    FormGroup.prototype.patchValue = function(valueOrObservable, options) {
      var _this = this;
      if (rxjs.isObservable(valueOrObservable)) {
        return valueOrObservable.subscribe(function(value) {
          return _super.prototype.patchValue.call(_this, value, options);
        });
      }
      _super.prototype.patchValue.call(this, valueOrObservable, options);
    };
    FormGroup.prototype.disabledWhile = function(observable, options) {
      return controlDisabledWhile(this, observable, options);
    };
    FormGroup.prototype.enabledWhile = function(observable, options) {
      return controlEnabledWhile(this, observable, options);
    };
    FormGroup.prototype.mergeValidators = function(validators) {
      mergeControlValidators(this, validators);
    };
    FormGroup.prototype.mergeAsyncValidators = function(validators) {
      this.setAsyncValidators(__spread([this.asyncValidator], coerceArray(validators)));
      this.updateValueAndValidity();
    };
    FormGroup.prototype.markAsTouched = function(opts) {
      _super.prototype.markAsTouched.call(this, opts);
      this.touchChanges.next(true);
    };
    FormGroup.prototype.markAsUntouched = function(opts) {
      _super.prototype.markAsUntouched.call(this, opts);
      this.touchChanges.next(false);
    };
    FormGroup.prototype.markAsPristine = function(opts) {
      _super.prototype.markAsPristine.call(this, opts);
      this.dirtyChanges.next(false);
    };
    FormGroup.prototype.markAsDirty = function(opts) {
      _super.prototype.markAsDirty.call(this, opts);
      this.dirtyChanges.next(true);
    };
    FormGroup.prototype.markAllAsDirty = function() {
      markAllDirty(this);
    };
    FormGroup.prototype.reset = function(formState, options) {
      _super.prototype.reset.call(this, formState, options);
    };
    FormGroup.prototype.setValidators = function(newValidator) {
      _super.prototype.setValidators.call(this, newValidator);
      _super.prototype.updateValueAndValidity.call(this);
    };
    FormGroup.prototype.setAsyncValidators = function(newValidator) {
      _super.prototype.setAsyncValidators.call(this, newValidator);
      _super.prototype.updateValueAndValidity.call(this);
    };
    FormGroup.prototype.validateOn = function(observableValidation) {
      return validateControlOn(this, observableValidation);
    };
    FormGroup.prototype.hasError = function(errorCode, path) {
      return _super.prototype.hasError.call(this, errorCode, path);
    };
    FormGroup.prototype.setErrors = function(errors, opts) {
      if (opts === void 0) {
        opts = {};
      }
      return _super.prototype.setErrors.call(this, errors, opts);
    };
    FormGroup.prototype.getError = function(errorCode, path) {
      return _super.prototype.getError.call(this, errorCode, path);
    };
    FormGroup.prototype.hasErrorAndTouched = function(error) {
      var path = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        path[_i - 1] = arguments[_i];
      }
      return hasErrorAndTouched.apply(void 0, __spread([this, error], path));
    };
    FormGroup.prototype.hasErrorAndDirty = function(error) {
      var path = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        path[_i - 1] = arguments[_i];
      }
      return hasErrorAndDirty.apply(void 0, __spread([this, error], path));
    };
    FormGroup.prototype.setEnable = function(enable, opts) {
      if (enable === void 0) {
        enable = true;
      }
      enableControl(this, enable, opts);
    };
    FormGroup.prototype.setDisable = function(disable, opts) {
      if (disable === void 0) {
        disable = true;
      }
      disableControl(this, disable, opts);
    };
    return FormGroup;
  })(forms.FormGroup);

  function isAbstractControlOptions(options) {
    return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
  }
  var FormBuilder = /** @class */ (function(_super) {
    __extends(FormBuilder, _super);
    function FormBuilder() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    FormBuilder.prototype.group = function(controlsConfig, options) {
      var controls = this._reduceControls(controlsConfig);
      var validators = null;
      var asyncValidators = null;
      var updateOn;
      if (options != null) {
        if (isAbstractControlOptions(options)) {
          validators = options.validators != null ? options.validators : null;
          asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
          updateOn = options.updateOn != null ? options.updateOn : undefined;
        } else {
          // `options` are legacy form group options
          validators = options['validator'] != null ? options['validator'] : null;
          asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
        }
      }
      return new FormGroup(controls, { asyncValidators: asyncValidators, updateOn: updateOn, validators: validators });
    };
    FormBuilder.prototype.control = function(formState, validatorOrOpts, asyncValidator) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    };
    FormBuilder.prototype.array = function(controlsConfig, validatorOrOpts, asyncValidator) {
      var _this = this;
      var controls = controlsConfig.map(function(c) {
        return _this._createControl(c);
      });
      return new FormArray(controls, validatorOrOpts, asyncValidator);
    };
    FormBuilder.ɵprov = core.ɵɵdefineInjectable({
      factory: function FormBuilder_Factory() {
        return new FormBuilder();
      },
      token: FormBuilder,
      providedIn: 'root'
    });
    FormBuilder = __decorate([core.Injectable({ providedIn: 'root' })], FormBuilder);
    return FormBuilder;
  })(forms.FormBuilder);

  var ControlValueAccessor = /** @class */ (function() {
    function ControlValueAccessor() {
      this.onChange = function(value) {};
      this.onTouched = function() {};
    }
    ControlValueAccessor.prototype.registerOnChange = function(fn) {
      this.onChange = fn;
    };
    ControlValueAccessor.prototype.registerOnTouched = function(fn) {
      this.onTouched = fn;
    };
    return ControlValueAccessor;
  })();

  exports.ControlValueAccessor = ControlValueAccessor;
  exports.FormArray = FormArray;
  exports.FormBuilder = FormBuilder;
  exports.FormControl = FormControl;
  exports.FormGroup = FormGroup;

  Object.defineProperty(exports, '__esModule', { value: true });
});
//# sourceMappingURL=ngneat-reactive-forms.umd.js.map
