# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.14.3](https://github.com/sthzg/jsugen/compare/v0.14.2...v0.14.3) (2019-06-25)


### Bug Fixes

* **main:** Add common babel plugins to defaults ([02d4c8a](https://github.com/sthzg/jsugen/commit/02d4c8a))





## [0.14.2](https://github.com/sthzg/jsugen/compare/v0.14.1...v0.14.2) (2019-06-24)


### Bug Fixes

* Refactor generator input arg to `sourceFile` ([8e8c534](https://github.com/sthzg/jsugen/commit/8e8c534))





## [0.14.1](https://github.com/sthzg/jsugen/compare/v0.14.0...v0.14.1) (2019-06-23)


### Bug Fixes

* Add `silent` flag and log written files to stdout ([6d838b2](https://github.com/sthzg/jsugen/commit/6d838b2))
* **core:** Fix resolution of transient loader modules ([a012e62](https://github.com/sthzg/jsugen/commit/a012e62))
* **core:** Throw error if parsing the source fails ([8760687](https://github.com/sthzg/jsugen/commit/8760687))





# [0.14.0](https://github.com/sthzg/jsugen/compare/v0.13.0...v0.14.0) (2019-06-22)

### Bug Fixes

- Refactor sources to core to prevent cyclic dependencies ([bab8fe0](https://github.com/sthzg/jsugen/commit/bab8fe0))

### Features

- Add first iteration of from-script generator ([b6564ef](https://github.com/sthzg/jsugen/commit/b6564ef))
- **sources:** Encapsulate source file loading in package ([931978d](https://github.com/sthzg/jsugen/commit/931978d))

# [0.13.0](https://github.com/sthzg/jsugen/compare/v0.12.0...v0.13.0) (2019-06-19)

### Features

- **core:** Improve output dir naming for filenames with multiple dots ([0205481](https://github.com/sthzg/jsugen/commit/0205481))

# [0.12.0](https://github.com/sthzg/jsugen/compare/v0.11.2...v0.12.0) (2019-06-18)

### Bug Fixes

- Rename generator exports, introduce integ tests package ([5de4b11](https://github.com/sthzg/jsugen/commit/5de4b11))
- Rename prerelease run script ([c8d8ada](https://github.com/sthzg/jsugen/commit/c8d8ada))

### Features

- Add dryRun flag to prevent file system operations ([b261ef5](https://github.com/sthzg/jsugen/commit/b261ef5))
- Add main generator API ([0918ae6](https://github.com/sthzg/jsugen/commit/0918ae6))
- Support generation of files relative to source file ([f99221f](https://github.com/sthzg/jsugen/commit/f99221f))
- Support glob ignore patterns (default: node_modules) ([a7740f2](https://github.com/sthzg/jsugen/commit/a7740f2))

## [0.11.2](https://github.com/sthzg/jsugen/compare/v0.11.1...v0.11.2) (2019-06-06)

### Bug Fixes

- Remove the `Enum` postfix from generated names ([4819c9c](https://github.com/sthzg/jsugen/commit/4819c9c))

## [0.11.1](https://github.com/sthzg/jsugen/compare/v0.11.0...v0.11.1) (2019-06-06)

### Bug Fixes

- Generate enums for non-array types ([a8ac5a7](https://github.com/sthzg/jsugen/commit/a8ac5a7))

# [0.11.0](https://github.com/sthzg/jsugen/compare/v0.10.0...v0.11.0) (2019-06-05)

### Features

- Add member name exports module generator ([c0abbb4](https://github.com/sthzg/jsugen/commit/c0abbb4))

# [0.10.0](https://github.com/sthzg/jsugen/compare/v0.9.5...v0.10.0) (2019-06-01)

### Bug Fixes

- Remove `Nth` from ENUM constant names ([c3a30a6](https://github.com/sthzg/jsugen/commit/c3a30a6))

### Features

- Support resolving JSON schema `definitions` ([f34b759](https://github.com/sthzg/jsugen/commit/f34b759))
- various features and fixes (see commit message) ([14c94f9](https://github.com/sthzg/jsugen/commit/14c94f9)), closes [#38](https://github.com/sthzg/jsugen/issues/38) [#41](https://github.com/sthzg/jsugen/issues/41) [#42](https://github.com/sthzg/jsugen/issues/42)

## [0.9.5](https://github.com/sthzg/jsugen/compare/v0.9.4...v0.9.5) (2019-05-11)

**Note:** Version bump only for package jsugen

## [0.9.4](https://github.com/sthzg/jsugen/compare/v0.9.3...v0.9.4) (2019-05-09)

### Bug Fixes

- Create Github releases on publish ([c6c10a3](https://github.com/sthzg/jsugen/commit/c6c10a3))

## [0.9.3](https://github.com/sthzg/jsugen/compare/v0.9.2...v0.9.3) (2019-05-08)

**Note:** Version bump only for package jsugen

## [0.9.2](https://github.com/sthzg/jsugen/compare/v0.9.1...v0.9.2) (2019-05-07)

**Note:** Version bump only for package jsugen

## [0.9.1](https://github.com/sthzg/jsugen/compare/v0.9.0...v0.9.1) (2019-05-07)

**Note:** Version bump only for package jsugen

# [0.9.0](https://github.com/sthzg/jsugen/compare/v0.3.0...v0.9.0) (2019-05-07)

### Bug Fixes

- Update script to successfully push tag to master ([20f2d0a](https://github.com/sthzg/jsugen/commit/20f2d0a))

### Features

- Prepend PATH to dot notation constant names ([6ca56da](https://github.com/sthzg/jsugen/commit/6ca56da))

# [0.8.0](https://github.com/sthzg/jsugen/compare/v0.3.0...v0.8.0) (2019-05-07)

### Features

- Prepend PATH to dot notation constant names ([6ca56da](https://github.com/sthzg/jsugen/commit/6ca56da))

# [0.7.0](https://github.com/sthzg/jsugen/compare/v0.3.0...v0.7.0) (2019-05-07)

### Features

- Prepend PATH to dot notation constant names ([6ca56da](https://github.com/sthzg/jsugen/commit/6ca56da))

# [0.6.0](https://github.com/sthzg/jsugen/compare/v0.3.0...v0.6.0) (2019-05-07)

### Features

- Prepend PATH to dot notation constant names ([6ca56da](https://github.com/sthzg/jsugen/commit/6ca56da))

# [0.5.0](https://github.com/sthzg/jsugen/compare/v0.3.0...v0.5.0) (2019-05-07)

### Features

- Prepend PATH to dot notation constant names ([6ca56da](https://github.com/sthzg/jsugen/commit/6ca56da))

# [0.3.0](https://github.com/sthzg/jsugen/compare/v0.2.0...v0.3.0) (2019-05-06)

### Features

- Support passing an initial object to builder ([b99e77d](https://github.com/sthzg/jsugen/commit/b99e77d))

# [0.2.0](https://github.com/sthzg/jsugen/compare/v0.1.5...v0.2.0) (2019-05-05)

### Features

- add builder function generator ([e9a7169](https://github.com/sthzg/jsugen/commit/e9a7169))

## [0.1.5](https://github.com/sthzg/jsugen/compare/v0.1.4...v0.1.5) (2019-05-02)

**Note:** Version bump only for package jsugen

## [0.1.4](https://github.com/sthzg/jsugen/compare/v0.1.3...v0.1.4) (2019-05-02)

**Note:** Version bump only for package jsugen

## [0.1.3](https://github.com/sthzg/jsugen/compare/v0.1.2...v0.1.3) (2019-05-01)

**Note:** Version bump only for package jsugen

## [0.1.2](https://github.com/sthzg/jsugen/compare/v0.1.1...v0.1.2) (2019-04-27)

### Bug Fixes

- Fix prettier script in root package.json ([0e1af61](https://github.com/sthzg/jsugen/commit/0e1af61))
- Upgrade lerna:restrap script to npm ([64e59b7](https://github.com/sthzg/jsugen/commit/64e59b7))

## [0.1.1](https://github.com/sthzg/jsugen/compare/v0.1.0...v0.1.1) (2019-02-28)

### Bug Fixes

- update parser setting to fix deprecation message ([11a3f5e](https://github.com/sthzg/jsugen/commit/11a3f5e))

# [0.1.0](https://github.com/sthzg/jsugen/compare/v0.0.4...v0.1.0) (2019-02-28)

### Features

- support passing default return values to selectors ([bff3629](https://github.com/sthzg/jsugen/commit/bff3629))

## [0.0.4](https://github.com/sthzg/jsugen/compare/v0.0.3...v0.0.4) (2019-02-28)

**Note:** Version bump only for package jsugen

## [0.0.3](https://github.com/sthzg/jsugen/compare/v0.0.3-beta.1...v0.0.3) (2019-02-28)

### Bug Fixes

- make build chain work and publish ([fc00c4e](https://github.com/sthzg/jsugen/commit/fc00c4e))
