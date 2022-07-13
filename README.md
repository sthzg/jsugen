# `Work-in-progress: jsugen`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Javascript code generation utils.

## CLI

```
jsugen.js <cmd> [args]

Commands:
  jsugen.js                              generate code based on config in
                                      <cwd>/.jsugen.config.js          [default]
  jsugen.js generate-object-paths [src]  generate a module that exports all object
                                      selector path strings with dot notation
                                                                [aliases: paths]
  jsugen.js generate-member-names [src]  generate a module that exports all
                                      distinct member names defined in the JSON
                                      schema                  [aliases: members]
  jsugen.js generate-enums [src]         generate a module that exports all values
                                      defined as enums in the json schema
                                                                [aliases: enums]
  jsugen.js generate-selectors [src]     generate a module that exports selector
                                      functions for all values defined in the
                                      json schema           [aliases: selectors]
  jsugen.js generate-builder [src]       generate a module that exports a builder
                                      function                [aliases: builder]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```
