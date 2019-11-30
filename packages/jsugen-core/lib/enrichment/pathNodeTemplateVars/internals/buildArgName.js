import { EMPTY_STRING } from '../../../constants';
import { Postfix } from '../../../enums';

export function buildArgName(member) {
  return [member, Postfix.INDEX].join(EMPTY_STRING);
}
