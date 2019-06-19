import { camelCase } from 'lodash-es';
import { DOT, EMPTY_STRING, PREFIX } from '../../constants';

export function buildOutputFilename(context) {
  const {
    data: {
      generateFunction: { moduleName },
    },
  } = context;

  return [
    camelCase(moduleName.replace(PREFIX.GENERATE_MODULE_NAME, EMPTY_STRING)),
    'js',
  ].join(DOT);
}
