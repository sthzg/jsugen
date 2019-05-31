import { compact } from 'lodash-es';
import { enrichInTemplate, maybeItem } from '../../../utils';
import {
  byPathNodesIsArrayLeaf,
  byPathNodesIsEnumLeaf,
} from '../../../selectors';
import { buildArrayNthVars, buildVars } from './buildVars';

export function enrichWithTemplateVars(memberDefinition) {
  const { pathNodes } = memberDefinition;
  const isNonEnumArray =
    byPathNodesIsArrayLeaf(pathNodes) && !byPathNodesIsEnumLeaf(pathNodes);
  const enrichWithVars = vars => enrichInTemplate(memberDefinition, { vars });

  return compact([
    buildVars(pathNodes),
    maybeItem(isNonEnumArray, buildArrayNthVars, pathNodes),
  ]).map(enrichWithVars);
}
