import fs from 'fs-extra';
import path from 'path';
import { writeFileSync } from 'fs';
import { log } from './utils';
import { DRY_RUN_BANNER } from './constants';

export function withWrite(writeConfig) {
  return content => {
    const { directory, dryRun, encoding, filename } = writeConfig;

    if (dryRun) {
      log(DRY_RUN_BANNER);
      log(content);
      return;
    }

    fs.ensureDirSync(directory);
    writeFileSync(path.join(directory, filename), content, { encoding });
  };
}
