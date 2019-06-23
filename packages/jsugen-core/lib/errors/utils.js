import { EMPTY_STRING, NEWLINE } from '../constants';

export function withSeparator(message) {
  const SEPERATOR = '-'.repeat(50);
  return [NEWLINE, SEPERATOR, NEWLINE, message, NEWLINE, SEPERATOR].join(
    EMPTY_STRING,
  );
}
