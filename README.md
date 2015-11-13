# jspm-ts-consume
Consume module for testing ts module

Consuming https://github.com/unional/jspm-ts-test and https://github.com/unional/jspm-ts-named

# Almost...
When doing `jspm i`, it will get the modules correctly with the generated `jspm_packages/github/unional/jspm-ts-test@0.1.6.js`.

The one last thing needed is to edit that file to:
````
module.exports = require("github:unional/jspm-ts-test@0.1.6/index.ts!").default;
````
