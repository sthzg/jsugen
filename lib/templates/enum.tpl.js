const { arrayToEnum } = require('../utils');

module.exports = ({ name, schema: { enum: values } }) => `
export const ${name}_ENUM = ${JSON.stringify(arrayToEnum(values), null, 2)};
export const ${name}_VALUES = ${JSON.stringify(values, null, 2)};
`;
