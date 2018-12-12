const { createWriteStream } = require('fs');
const { pipeline: pipelineFn } = require('stream');
const { promisify } = require('util');
const {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
} = require('../constants');
const {
  BuildObjectPathsTransform,
  CompileToTemplateTransform,
  StdoutWritable,
  FilterPropertiesTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  PrependToFileTransform,
  PrettierTransform,
} = require('../streams');
const { objectPathConstant } = require('../templates');

const pipeline = promisify(pipelineFn);

module.exports = ({ schema, out }) => {
  const write = out ? createWriteStream(out) : new StdoutWritable();

  return pipeline(
    jsonSchemaReadable(schema),
    new FilterPropertiesTransform(),
    new BuildObjectPathsTransform(),
    new CompileToTemplateTransform(objectPathConstant),
    new MemorySinkTransform(),
    new PrependToFileTransform(DEFAULT_FILE_DOCSTRING),
    new PrettierTransform(DEFAULT_PRETTIER_OPTIONS),
    write
  );
};
