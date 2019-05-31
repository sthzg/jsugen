import { NEWLINE } from './constants';

export function withPrependToString(...headers) {
  return content => {
    return [...headers, content].join(NEWLINE);
  };
}
