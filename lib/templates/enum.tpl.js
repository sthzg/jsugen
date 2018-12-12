const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');
const { arrayToEnum } = require('../utils');

const format = (input, postfix) => `${upperFirst(camelCase(input))}${postfix}`;
const stringify = input => JSON.stringify(input, null, 2);

module.exports = ({ name, schema: { enum: values } }) => `
export const ${format(name, 'Values')} = ${stringify(values)};
export const ${format(name, 'Enum')} = ${stringify(arrayToEnum(values))};
`;
