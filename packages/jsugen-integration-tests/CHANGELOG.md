# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.16.0](https://github.com/sthzg/jsugen/compare/v0.15.3...v0.16.0) (2019-11-21)


### Bug Fixes

* Move lodash-es from peerDependency to dependency ([724016d](https://github.com/sthzg/jsugen/commit/724016d))


### Features

* **config:** Support configuration for lodash.get import ([3afa665](https://github.com/sthzg/jsugen/commit/3afa665))
* **config:** Support generation as common js ([9db74e4](https://github.com/sthzg/jsugen/commit/9db74e4))





## [0.15.3](https://github.com/sthzg/jsugen/compare/v0.15.2...v0.15.3) (2019-11-21)

**Note:** Version bump only for package @sthzg/jsugen-integration-tests





## [0.15.1](https://github.com/sthzg/jsugen/compare/v0.15.1-next.1...v0.15.1) (2019-10-19)

**Note:** Version bump only for package @sthzg/jsugen-integration-tests





# [0.15.0](https://github.com/sthzg/jsugen/compare/v0.14.4...v0.15.0) (2019-06-27)


### Bug Fixes

* Do not write empty module files ([9bb47f7](https://github.com/sthzg/jsugen/commit/9bb47f7))





## [0.14.4](https://github.com/sthzg/jsugen/compare/v0.14.3...v0.14.4) (2019-06-27)


### Bug Fixes

* **generate-enums:** separate camel-cased keys correctly ([be5c986](https://github.com/sthzg/jsugen/commit/be5c986))





## [0.14.3](https://github.com/sthzg/jsugen/compare/v0.14.2...v0.14.3) (2019-06-25)

**Note:** Version bump only for package @sthzg/jsugen-integration-tests





## [0.14.2](https://github.com/sthzg/jsugen/compare/v0.14.1...v0.14.2) (2019-06-24)


### Bug Fixes

* Refactor generator input arg to `sourceFile` ([8e8c534](https://github.com/sthzg/jsugen/commit/8e8c534))





## [0.14.1](https://github.com/sthzg/jsugen/compare/v0.14.0...v0.14.1) (2019-06-23)


### Bug Fixes

* Add `silent` flag and log written files to stdout ([6d838b2](https://github.com/sthzg/jsugen/commit/6d838b2))





# [0.14.0](https://github.com/sthzg/jsugen/compare/v0.13.0...v0.14.0) (2019-06-22)

### Features

- Add first iteration of from-script generator ([b6564ef](https://github.com/sthzg/jsugen/commit/b6564ef))
- **sources:** Encapsulate source file loading in package ([931978d](https://github.com/sthzg/jsugen/commit/931978d))

# [0.13.0](https://github.com/sthzg/jsugen/compare/v0.12.0...v0.13.0) (2019-06-19)

### Features

- **core:** Improve output dir naming for filenames with multiple dots ([0205481](https://github.com/sthzg/jsugen/commit/0205481))

# [0.12.0](https://github.com/sthzg/jsugen/compare/v0.11.2...v0.12.0) (2019-06-18)

### Bug Fixes

- Rename generator exports, introduce integ tests package ([5de4b11](https://github.com/sthzg/jsugen/commit/5de4b11))

### Features

- Add dryRun flag to prevent file system operations ([b261ef5](https://github.com/sthzg/jsugen/commit/b261ef5))
- Add main generator API ([0918ae6](https://github.com/sthzg/jsugen/commit/0918ae6))
- Support generation of files relative to source file ([f99221f](https://github.com/sthzg/jsugen/commit/f99221f))
- Support glob ignore patterns (default: node_modules) ([a7740f2](https://github.com/sthzg/jsugen/commit/a7740f2))
