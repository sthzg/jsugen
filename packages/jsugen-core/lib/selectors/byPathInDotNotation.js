import get from 'lodash-es/get';

const byPathInDotNotation = context => get(context, 'data.pathInDotNotation');

export default byPathInDotNotation;
