import first from 'lodash.first';
import isEmpty from 'lodash.isempty';
import HistoryTransform from './HistoryTransform';
import { buildObjectPathFromTokens, removeSchemaKeywords } from '../utils';

class FilterSchemaKeywordsTransform extends HistoryTransform {
  constructor(options = {}) {
    super({ objectMode: true, ...options });
  }

  _transform(chunk, encoding, callback) {
    const { schema, pathToParent, path } = chunk;

    const pathTokens = [...pathToParent, ...path];

    if (first(pathTokens) !== 'properties') {
      return callback();
    }

    const tokens = removeSchemaKeywords(pathTokens);
    const id = buildObjectPathFromTokens(tokens);

    if (!isEmpty(tokens) && !isEmpty(schema) && this.isUnique(id)) {
      this.push({ tokens, path: id, schema });
      this.history.push(id);
    }

    return callback();
  }
}

export default FilterSchemaKeywordsTransform;
