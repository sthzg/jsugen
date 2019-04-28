import { DOT } from '../constants';

function buildSelectorPathInDotNotation(tokens) {
  return tokens.join(DOT);
}

export default buildSelectorPathInDotNotation;
