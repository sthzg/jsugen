# `Work-in-progress: jsugen`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![circleci](https://circleci.com/gh/sthzg/jsugen/tree/develop.svg?style=svg)](https://circleci.com/gh/sthzg/jsugen)

> Generate common Javascript utils like selectors and flat setters for
> object structures defined in a JSON schema.

## CLI

```
jsugen <cmd> [args]

Commands:
  jsugen generate-object-paths [schema]  generate a module that exports all
                                         object selector path strings with dot
                                         notation               [aliases: paths]
  jsugen generate-enums [schema]         generate a module that exports all
                                         values defined as enums in the json
                                         schema                 [aliases: enums]
  jsugen generate-selectors [schema]     generate a module that exports selector
                                         functions for all values defined in the
                                         json schema        [aliases: selectors]
  jsugen generate-builder [schema]       generate a module that exports a
                                         builder function     [aliases: builder]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```
