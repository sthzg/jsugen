import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';
import { byMemberDefinitionId } from '../../../selectors';
import { toMemberDefinitions } from './toMemberDefinitions';

export function toMemberDefinitionsStream(branches) {
  return from(toMemberDefinitions(branches)).pipe(
    distinct(byMemberDefinitionId),
  );
}
