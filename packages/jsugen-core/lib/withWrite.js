import { writeFileSync } from 'fs';
import { log } from './utils';

const DEFAULT_FILE_OPTIONS = { encoding: 'utf8' };

export function withWrite(filePath) {
  return content => {
    if (filePath) {
      writeFileSync(filePath, content, DEFAULT_FILE_OPTIONS);
    } else {
      log(content);
    }
  };
}
