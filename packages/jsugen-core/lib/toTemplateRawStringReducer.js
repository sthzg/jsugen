import { NEWLINE } from './constants';
import { byTemplateRaw } from './selectors';

const toTemplateRawStringReducer = (result, current) =>
  [result, byTemplateRaw(current)].join(NEWLINE);

export default toTemplateRawStringReducer;
