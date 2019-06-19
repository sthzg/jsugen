import { buildOutputDirectoryPath } from '../buildOutputDirectoryPath';

describe('buildOutputDirectoryPath()', () => {
  describe('model directory naming', () => {
    test('should build the expected directory path for a file matching a single `files` pattern', () => {
      const context = {
        data: {
          definition: {
            files: ['*.schema.json'],
            output: { baseDirectory: '/tmp/output/baseDirectory' },
          },
          sourceFile: '/some/directory/any.schema.json',
        },
      };

      expect(buildOutputDirectoryPath(context)).toBe(
        '/tmp/output/baseDirectory/Any',
      );
    });

    test('should build the expected directory path for the most specific matching pattern', () => {
      const context = {
        data: {
          definition: {
            files: ['*.json', '*.schema.json'],
            output: { baseDirectory: '/tmp/output/baseDirectory' },
          },
          sourceFile: '/some/directory/any.schema.json',
        },
      };

      expect(buildOutputDirectoryPath(context)).toBe(
        '/tmp/output/baseDirectory/Any',
      );
    });

    test('should build the expected path for `files` patterns that include slashes', () => {
      const context = {
        data: {
          definition: {
            files: ['/tmp/**/*.json'],
            output: { baseDirectory: '/tmp/output/baseDirectory' },
          },
          sourceFile: '/some/directory/any.json',
        },
      };

      expect(buildOutputDirectoryPath(context)).toBe(
        '/tmp/output/baseDirectory/Any',
      );
    });

    test('should simply remove the last filename extension if the `files` pattern does not contain a wildcard', () => {
      const context = {
        data: {
          definition: {
            files: ['someSpecificMatch.json'],
            output: { baseDirectory: '/tmp/output/baseDirectory' },
          },
          sourceFile: '/some/directory/someSpecificMatch.json',
        },
      };

      expect(buildOutputDirectoryPath(context)).toBe(
        '/tmp/output/baseDirectory/SomeSpecificMatch',
      );
    });

    test('should simply remove the last filename extension if the `files` pattern does not with a plain extension', () => {
      const context = {
        data: {
          definition: {
            files: ['*.something*.'],
            output: { baseDirectory: '/tmp/output/baseDirectory' },
          },
          sourceFile: '/some/directory/any.something.json',
        },
      };

      expect(buildOutputDirectoryPath(context)).toBe(
        '/tmp/output/baseDirectory/AnySomething',
      );
    });
  });
});
