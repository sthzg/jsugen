/* eslint-disable global-require */
module.exports = {
  buildObjectPathsTransform: require('./buildObjectPathsTransform'),
  compileToTemplateTransform: require('./compileToTemplateTransformer'),
  fileWritable: require('./fileWriteable'),
  filterEnumsTransform: require('./filterEnumsTransform'),
  filterPropertiesTransform: require('./filterPropertiesTransform'),
  jsonSchemaReadable: require('./jsonSchemaReadable'),
  stdoutWritable: require('./stoudWritable'),
  withFileHeadTransform: require('./withFileHeadTransform'),
  withPrettierTransform: require('./withPrettierTransform'),
};
