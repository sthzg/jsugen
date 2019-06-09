import fs from 'fs';

export function parseSourceFile(sourceFile) {
  return JSON.parse(fs.readFileSync(sourceFile));
}
