import { filter, groupBy, mergeMap } from 'rxjs/operators';
import { reduceGroupToArray } from '../../utils/rxjs';
import {
  byChunkHasJsonSchemaDefinition,
  byChunkRootMemberName,
  byChunkStartsWithPropertiesKeyword,
} from './selectors';
import { fromJsonSchemaWalker } from './input';
import { toMemberDefinitionsStream } from './normalization';

export function fromJsonSchema(schema) {
  return fromJsonSchemaWalker(schema).pipe(
    /* Filtering */
    filter(byChunkHasJsonSchemaDefinition),
    filter(byChunkStartsWithPropertiesKeyword),

    /* Mapping */
    groupBy(byChunkRootMemberName),
    mergeMap(reduceGroupToArray),
    mergeMap(toMemberDefinitionsStream),
  );
}
