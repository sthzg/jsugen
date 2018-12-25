import camelCase from 'lodash.camelcase';
import upperFirst from 'lodash.upperfirst';
import { arrayToEnum } from '@sthzg/jsugen-core/lib/utils';

const format = (input, postfix) => `${upperFirst(camelCase(input))}${postfix}`;
const stringify = input => JSON.stringify(input, null, 2);

export default ({ name, schema: { enum: values } }) => `
export const ${format(name, 'Values')} = ${stringify(values)};
export const ${format(name, 'Enum')} = ${stringify(arrayToEnum(values))};
`;
