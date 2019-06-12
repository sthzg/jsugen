import { DOT } from '../../../../constants';

export function buildId(pathNodes) {
  return pathNodes.map(pathNode => pathNode.member).join(DOT);
}
