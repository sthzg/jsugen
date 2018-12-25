import { Transform } from 'stream';
import { buildObjectPathFromTokens, removeSchemaProperties } from '../utils';

class FilterEnumsTransform extends Transform {
  constructor(options = {}) {
    super({ objectMode: true, ...options });
  }

  _transform(chunk, encoding, callback) {
    const { schema, pathToParent = [], path } = chunk;

    const tokens = removeSchemaProperties([...pathToParent, path]);
    const id = buildObjectPathFromTokens(tokens);

    if (schema.enum) {
      this.push({ tokens, path: id, schema });
    }

    callback();
  }
}

export default FilterEnumsTransform;
