import get from 'lodash-es/get';

const byPathInDotNotation = chunk => get(chunk, 'data.pathInDotNotation');

export default byPathInDotNotation;
