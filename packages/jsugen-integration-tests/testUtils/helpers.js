import path from 'path';
import pkgDir from 'pkg-dir';
import { WriteConfig } from '@sthzg/jsugen-core';
import { NEWLINE } from '@sthzg/jsugen-core/lib/constants';

export const OUT_DIR_NAME = 'out';

export const DryRunWriteConfig = new WriteConfig({ dryRun: true });

export function byOutDirectory(target) {
  return path.resolve(pkgDir.sync(__filename), OUT_DIR_NAME, target);
}

export function withSnapshotCheck(done) {
  const chunks = [];

  return {
    next(output) {
      chunks.push(output);
    },
    complete() {
      const content = chunks.join(NEWLINE);
      expect(content).toMatchSnapshot();
      done();
    },
  };
}
