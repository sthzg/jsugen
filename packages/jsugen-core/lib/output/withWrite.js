import fs from 'fs-extra';
import path from 'path';
import { writeFileSync } from 'fs';
import { DRY_RUN_BANNER } from '../constants';
import { logIf } from '../utils/log';

export function withWrite(writeConfig) {
  return content => {
    const { directory, dryRun, encoding, filename, silent } = writeConfig;

    const logIfNotSilent = logIf(!silent);

    if (dryRun) {
      logIfNotSilent(DRY_RUN_BANNER);
      logIfNotSilent(content);

      return;
    }

    const location = path.join(directory, filename);
    fs.ensureDirSync(directory);
    writeFileSync(location, content, { encoding });

    logIfNotSilent(`✎ … wrote ${location}`);
  };
}
