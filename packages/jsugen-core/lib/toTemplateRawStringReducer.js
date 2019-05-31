import { NEWLINE } from './constants';
import { byTemplateRaw } from './selectors';

export function toTemplateRawStringReducer(result, current) {
  return [result, byTemplateRaw(current)].join(NEWLINE);
}
