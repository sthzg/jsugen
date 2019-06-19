import fs from 'fs-extra';
import { generate } from '@sthzg/jsugen-core';
import path from 'path';
import { byOutDirectory } from '../../testUtils/helpers';

/**
 * Set to `true` to to keep the generated files in `OUT_DIR`.
 */
const SKIP_DELETE = false;

const OUT_DIR = byOutDirectory('core');
const byPathInOut = needle => path.resolve(__dirname, OUT_DIR, needle);
const existsInOut = needle => fs.existsSync(byPathInOut(needle));

afterEach(() => {
  if (!SKIP_DELETE) {
    fs.emptyDirSync(OUT_DIR);
  }
});

// ---
// Dry Run Tests.
// ---
describe('main: dry run', () => {
  const config = {
    dryRun: true,
    definitions: [
      {
        files: ['**/globTesting/**/*.schema.json'],
        generators: [
          '@sthzg/jsugen-generate-selector-functions',
          '@sthzg/jsugen-generate-lodash-object-paths',
        ],
        output: {
          baseDirectory: OUT_DIR,
        },
      },
    ],
  };

  test('should glob the expected files and run the configured generators', done => {
    expect.assertions(4);

    generate({ config }).subscribe(output => {
      expect(output).toMatchSnapshot();
      done();
    });
  });
});

// ---
// IO Tests: Static output directory configuration.
// ---
describe('main: static output directory', () => {
  const config = {
    dryRun: false,
    definitions: [
      {
        files: ['**/globTesting/**/*.schema.json'],
        generators: ['@sthzg/jsugen-generate-selector-functions'],
        output: {
          baseDirectory: OUT_DIR,
        },
      },
    ],
  };

  test('should generate the files at the expected location for output mode: static', done => {
    expect.assertions(2);

    generate({ config }).subscribe({
      complete() {
        expect(existsInOut('Hello/selectorFunctions.js')).toBe(true);
        expect(existsInOut('World/selectorFunctions.js')).toBe(true);

        done();
      },
    });
  });
});

// ---
// IO Tests: Source-file relative output directory configuration.
// ---
describe('main: colocated writes', () => {
  const config = {
    dryRun: false,
    definitions: [
      {
        files: ['**/colocatedOutput/**/*.schema.json'],
        generators: ['@sthzg/jsugen-generate-selector-functions'],
        output: {
          baseDirectory:
            '<sourceFile>../../../out/core/relative-to-source-file',
        },
      },
    ],
  };

  test('should generate the files at the expected location for output mode: relative', done => {
    expect.assertions(2);

    generate({ config }).subscribe({
      complete() {
        expect(
          existsInOut('relative-to-source-file/Hello/selectorFunctions.js'),
        ).toBe(true);
        expect(
          existsInOut('relative-to-source-file/World/selectorFunctions.js'),
        ).toBe(true);

        done();
      },
    });
  });
});
