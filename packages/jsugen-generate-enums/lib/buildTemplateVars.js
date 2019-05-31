import { sortBy } from 'lodash-es';
import {
  arrayToEnum,
  enrichInTemplate,
  toUpperFirstCamelCase,
} from '@sthzg/jsugen-core';

const POSTFIX = {
  VALUES: 'Values',
  ENUM: 'Enum',
};

export function buildTemplateVars(memberDefinition) {
  const {
    template: {
      vars: { enumValues, name },
    },
  } = memberDefinition;

  const sortedEnumValues = sortBy(enumValues);

  const vars = {
    valuesConstant: {
      name: toUpperFirstCamelCase(name, POSTFIX.VALUES),
      values: sortedEnumValues,
    },
    enumConstant: {
      name: toUpperFirstCamelCase(name),
      values: arrayToEnum(sortedEnumValues),
    },
  };

  return enrichInTemplate(memberDefinition, { vars });
}
