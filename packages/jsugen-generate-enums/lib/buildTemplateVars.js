import { replace, sortBy } from 'lodash-es';
import {
  EMPTY_STRING,
  POSTFIX,
  arrayToEnum,
  enrichInTemplate,
  toUpperFirstCamelCase,
} from '@sthzg/jsugen-core';

export function buildTemplateVars(memberDefinition) {
  const {
    template: {
      vars: { enumValues, name },
    },
  } = memberDefinition;

  const removeNth = input => replace(input, POSTFIX.NTH, EMPTY_STRING);

  const sortedEnumValues = sortBy(enumValues);
  const valueName = removeNth(toUpperFirstCamelCase(name, POSTFIX.VALUES));
  const enumName = removeNth(toUpperFirstCamelCase(name));

  const vars = {
    valuesConstant: {
      name: valueName,
      values: sortedEnumValues,
    },
    enumConstant: {
      name: enumName,
      values: arrayToEnum(sortedEnumValues),
    },
  };

  return enrichInTemplate(memberDefinition, { vars });
}
