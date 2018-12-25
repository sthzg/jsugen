import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { arrayToEnum } from '../utils';

const format = (input, postfix) => `${upperFirst(camelCase(input))}${postfix}`;
const stringify = input => JSON.stringify(input, null, 2);

export default ({ name, schema: { enum: values } }) => `
export const ${format(name, 'Values')} = ${stringify(values)};
export const ${format(name, 'Enum')} = ${stringify(arrayToEnum(values))};
`;
