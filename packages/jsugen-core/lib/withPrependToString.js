import { NEWLINE } from './constants';

const withPrependToString = (...headers) => content => {
  return [...headers, content].join(NEWLINE);
};

export default withPrependToString;
