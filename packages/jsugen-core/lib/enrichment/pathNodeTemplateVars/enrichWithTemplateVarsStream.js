import { from } from 'rxjs';
import { castArray } from 'lodash-es';
import { enrichWithTemplateVars } from './internal/enrichWithTemplatVars';

export function enrichWithTemplateVarsStream(memberDefinition) {
  const enriched = enrichWithTemplateVars(memberDefinition);

  return from(castArray(enriched));
}
