import {
  mergeSet,
  wrapInSingleQuote,
  wrapInCurlyBraces,
} from '@sthzg/jsugen-core/lib/utils';
import { COMMA } from '@sthzg/jsugen-core/lib/constants';

const buildInputString = paths => {
  const destructuredArgsString = Object.keys(paths).join(COMMA);

  return wrapInCurlyBraces(destructuredArgsString);
};

const buildValueString = paths => {
  const keyValueString = Object.keys(paths)
    .map(pathName => `${wrapInSingleQuote(paths[pathName])}: ${pathName}`)
    .join(COMMA);

  return wrapInCurlyBraces(keyValueString);
};

export default context => {
  const {
    template: {
      vars: { paths },
    },
  } = context;

  const inputString = buildInputString(paths);
  const valueString = buildValueString(paths);

  return `
import cloneDeep from 'lodash-es/cloneDeep';
import isUndefined from 'lodash-es/isUndefined';
import merge from 'lodash-es/merge';
import set from 'lodash-es/set';

const mergeSet = ${mergeSet.toString()};

const builder = (${inputString}) => 
  mergeSet({}, ${valueString});

export default builder;                
  `;
};
