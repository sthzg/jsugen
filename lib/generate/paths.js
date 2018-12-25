import { createWriteStream } from 'fs';
import { pipeline as pipelineFn } from 'stream';
import { promisify } from 'util';
import { DEFAULT_FILE_DOCSTRING, DEFAULT_PRETTIER_OPTIONS } from '../constants';
import {
  BuildObjectPathsTransform,
  CompileToTemplateTransform,
  FilterPropertiesTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  PrependToFileTransform,
  PrettierTransform,
  StdoutWritable,
} from '../streams';
import { objectPathConstant } from '../templates';

const pipeline = promisify(pipelineFn);

export default ({ schema, out }) => {
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
