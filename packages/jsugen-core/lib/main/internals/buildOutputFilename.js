import { camelCase } from 'lodash-es';
import { DOT, EMPTY_STRING } from '../../constants';
import { Prefix } from '../../enums';

export function buildOutputFilename(context) {
  const {
    data: {
      generateFunction: { moduleName },
    },
  } = context;

  return [
    camelCase(moduleName.replace(Prefix.GENERATE_MODULE_NAME, EMPTY_STRING)),
    'js',
  ].join(DOT);
}
