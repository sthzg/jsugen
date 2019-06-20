import { from } from 'rxjs';
import { parseSource } from '@sthzg/jsugen-sources';

export function fromSourceFile(sourceFile) {
  return from(parseSource(sourceFile));
}
