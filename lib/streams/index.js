/* eslint-disable global-require */
module.exports = {
  BuildObjectPathsTransform: require('./BuildObjectPathsTransform'),
  CompileToTemplateTransform: require('./CompileToTemplateTransform'),
  FilterEnumsTransform: require('./FilterEnumsTransform'),
  FilterPropertiesTransform: require('./FilterPropertiesTransform'),
  jsonSchemaReadable: require('./jsonSchemaReadable'),
  MemorySinkTransform: require('./MemorySinkTransform'),
  PrependToFileTransform: require('./PrependToFileTransform'),
  PrettierTransform: require('./PrettierTransform'),
  StdoutWritable: require('./StdoutWritable'),
};
