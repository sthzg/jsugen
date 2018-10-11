const camelCase = require('lodash/camelCase');

module.exports = ({ path }) => `
export function ${camelCase(`by_${path}`)}(property) {
  return get(property, '${path}');
}
`;
