import { NEWLINE } from '../constants';

export function withPrependToString(...chunks) {
  return content => {
    return [...chunks, content].join(NEWLINE);
  };
}
