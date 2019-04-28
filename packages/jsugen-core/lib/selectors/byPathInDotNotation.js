import get from 'lodash.get';

const byPathInDotNotation = chunk => get(chunk, 'data.pathInDotNotation');

export default byPathInDotNotation;
