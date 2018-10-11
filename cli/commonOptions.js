const { resolve } = require('path');

module.exports.schemaOption = {
  type: 'string',
  describe: 'path to json schema file to generate utils from',
  coerce: resolve,
  normalize: true,
  required: true,
};

module.exports.outOption = {
  type: 'string',
  coerce: resolve,
  normalize: true,
};
