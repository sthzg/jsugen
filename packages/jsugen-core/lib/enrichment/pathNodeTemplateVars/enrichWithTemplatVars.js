import { enrichInTemplate } from '../../utils';
import { buildVars } from './internals';

export function enrichWithPathNodeVars(memberDefinition) {
  const { pathNodes } = memberDefinition;

  return enrichInTemplate(memberDefinition, { vars: buildVars(pathNodes) });
}
