yarn build:lib;
cd dist/ngneat/reactive-forms;
git init;
git add *;
git commit -m 'build';
git remote add origin git@github.com:sharshuv-quotient/reactive-forms-build.git;
git push -u origin master --force;
