import path from 'path';
import pkgDir from 'pkg-dir';
import { WriteConfig } from '@sthzg/jsugen-core';

export const OUT_DIR_NAME = 'out';

export const DryRunWriteConfig = new WriteConfig({ dryRun: true });

export function byOutDirectory(target) {
  return path.resolve(pkgDir.sync(__filename), OUT_DIR_NAME, target);
}
