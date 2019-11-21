import path from 'path';
import pkgDir from 'pkg-dir';
import { WriteConfig } from '@sthzg/jsugen-core';
import { NEWLINE } from '@sthzg/jsugen-core/lib/constants';

// ---
// Constants.
// ---

/**
 * Target directory name for file writes during integration tests.
 */
export const OUT_DIR_NAME = 'out';

/**
 * Dry run configuration settings for integration tests.
 */
export const DryRunWriteConfig = new WriteConfig({
  dryRun: true,
  silent: true,
});

// ---
// Paths.
// ---

export const TEST_RESOURCES_DIR = path.resolve(__dirname, '../resources');
export const EXAMPLE_SCHEMA_PATH = path.join(
  TEST_RESOURCES_DIR,
  'example.schema.json',
);
export const CONTACT_SCHEMA_PATH = path.join(
  TEST_RESOURCES_DIR,
  'example.contact.json',
);
export const ARRAY_OF_OBJECTS_SCHEMA_PATH = path.join(
  TEST_RESOURCES_DIR,
  'example.array-of-objects.schema.json',
);
export const EMPTY_SCHEMA_PATH = path.join(
  TEST_RESOURCES_DIR,
  'empty.schema.json',
);

// ---
// Utils.
// ---

export function byOutDirectory(target) {
  return path.resolve(pkgDir.sync(__filename), OUT_DIR_NAME, target);
}

export function withSnapshotCheck(done, annotation) {
  const chunks = [];

  return {
    next(output) {
      chunks.push(output);
    },
    complete() {
      const content = chunks.join(NEWLINE);
      expect(content).toMatchSnapshot(annotation);
      done();
    },
  };
}
