# Changelog

All notable changes to this project will be documented in this file.

The format bases on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

- Updated dependencies to their latest versions.
- Updated `rollup` from `2.6.x` to `2.7.x`.
- Updated Node version to `12.16.2`.

### Deprecated

### Removed

- Removed deprecated `@open-wc/prettier-config`, using Prettier directly.

### Fixed

### Security

## [1.1.0] - 2020-04-20

### Added

- Added missing `type` declaration to package definition (@see https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/)
- Automatically generate `custom-elements.json` when committing and before publishing.

### Changed

- Updated rollup build config to the latest open-wc version which uses rollup.js 2.x

## [1.0.2] - 2020-04-15

### Added

- Added example build configuration with support down to IE 11

### Fixed

- Fixed prettier config file name

## [1.0.1] - 2020-04-08

### Added

- NPM version badge
- Small `package.json` improvements

## [1.0.0] - 2020-04-08

### Added

- Initial release with a documentation and examples.

[Unreleased]: https://github.com/inventage/matomo-opt-out/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/inventage/matomo-opt-out/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/inventage/matomo-opt-out/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/inventage/matomo-opt-out/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/inventage/matomo-opt-out/releases/tag/v1.0.0
