# `Work-in-progress: jsugen`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Generate common Javascript utils like selectors and flat setters for
> object structures defined in a JSON schema.

## CLI

```
jsugen.js <cmd> [args]

Commands:
  jsugen.js generate-object-paths [schema]  generate a module that exports all
                                            object selector path strings with
                                            dot notation        [aliases: paths]
  jsugen.js generate-enums [schema]         generate a module that exports all
                                            values defined as enums in the json
                                            schema              [aliases: enums]
  jsugen.js generate-selectors [schema]     generate a module that exports
                                            selector functions for all values
                                            defined in the json schema
                                                            [aliases: selectors]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```
