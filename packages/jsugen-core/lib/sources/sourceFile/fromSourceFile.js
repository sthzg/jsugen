import { from } from 'rxjs';
import { parseSource } from '../../parsing';

export function fromSourceFile(sourceFile) {
  return from(parseSource(sourceFile));
}
