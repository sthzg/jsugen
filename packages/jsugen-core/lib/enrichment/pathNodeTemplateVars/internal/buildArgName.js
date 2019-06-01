import { EMPTY_STRING, POSTFIX } from '../../../constants';

export function buildArgName(member) {
  return [member, POSTFIX.INDEX].join(EMPTY_STRING);
}
