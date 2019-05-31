import { EMPTY_STRING } from '../../../constants';
import { POSTFIX } from '../constants';

export function buildArgName(member) {
  return [member, POSTFIX.INDEX].join(EMPTY_STRING);
}
