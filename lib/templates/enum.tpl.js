const camelCase = require('lodash/camelCase');
const { arrayToEnum } = require('../utils');

module.exports = ({ name, schema: { enum: values } }) => `
export const ${camelCase(name)}Values = ${JSON.stringify(values, null, 2)};
export const ${camelCase(name)}Enum = ${JSON.stringify(arrayToEnum(values), null, 2)};
`;
