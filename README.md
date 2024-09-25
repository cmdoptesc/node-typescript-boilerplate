# node-typescript-boilerplate

Fork of: https://github.com/jsynowiec/node-typescript-boilerplate

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects.

🏃🏽 Instant Value: All basic tools included and configured:

- [TypeScript][typescript] [5.5][typescript-5-5]
- [ESM][esm]
- [ESLint][eslint] with some initial rules recommendation
- [Vitest][vitest] for fast unit testing and code coverage
- Type definitions for Node.js
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- [EditorConfig][editorconfig] for consistent coding style
- Reproducible environments thanks to [Volta][volta]
- Example configuration for [GitHub Actions][gh-actions]
- Simple example of TypeScript code and unit test

Added:
- [Remeda](https://github.com/remeda/remeda) for utility functions

🤲 Free as in speech: available under the APLv2 license.

## Available Scripts

- `clean` - remove coverage data, cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `prettier` - reformat files,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests
- `test:coverage` - run test and print out test coverage

## Backers & Sponsors

Support the original project by becoming a [sponsor][sponsor].

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[nodejs]: https://nodejs.org/dist/latest-v20.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-5-5]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor]: https://github.com/sponsors/jsynowiec
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[volta]: https://volta.sh
[gh-actions]: https://github.com/features/actions
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[editorconfig]: https://editorconfig.org
[vitest]: https://vitest.dev
