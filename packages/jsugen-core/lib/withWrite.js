import { writeFileSync } from 'fs';
import { log } from './utils';

const DEFAULT_FILE_OPTIONS = { encoding: 'utf8' };

const withWrite = filePath => content => {
  if (filePath) {
    writeFileSync(filePath, content, DEFAULT_FILE_OPTIONS);
  } else {
    log(content);
  }
};

export default withWrite;
