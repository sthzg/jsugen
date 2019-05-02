import {
  arrayToEnum,
  enrichInTemplate,
  toUpperFirstCamelCase,
} from '@sthzg/jsugen-core/lib/utils';

const POSTFIX = {
  VALUES: 'Values',
  ENUM: 'Enum',
};

/**
 * Transforms `context.data` to the template variables.
 */
const buildTemplateVars = context => {
  const {
    data: { pathName, enumValues },
  } = context;

  const vars = {
    valuesConstant: {
      name: toUpperFirstCamelCase(pathName, POSTFIX.VALUES),
      values: enumValues,
    },
    enumConstant: {
      name: toUpperFirstCamelCase(pathName, POSTFIX.ENUM),
      values: arrayToEnum(enumValues),
    },
  };

  return enrichInTemplate(context, { vars });
};

export default buildTemplateVars;
