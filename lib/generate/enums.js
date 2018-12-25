import { createWriteStream } from 'fs';
import { pipeline as pipelineFn } from 'stream';
import { promisify } from 'util';
import { DEFAULT_FILE_DOCSTRING, DEFAULT_PRETTIER_OPTIONS } from '../constants';
import {
  BuildObjectPathsTransform,
  CompileToTemplateTransform,
  FilterEnumsTransform,
  FilterPropertiesTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  PrependToFileTransform,
  PrettierTransform,
  StdoutWritable,
} from '../streams';
import { enumModule } from '../templates';

const pipeline = promisify(pipelineFn);

export default function({ schema, out }) {
  const write = out ? createWriteStream(out) : new StdoutWritable();

  return pipeline(
    jsonSchemaReadable(schema),
    new FilterPropertiesTransform(),
    new FilterEnumsTransform(),
    new BuildObjectPathsTransform(),
    new CompileToTemplateTransform(enumModule),
    new MemorySinkTransform(),
    new PrependToFileTransform(DEFAULT_FILE_DOCSTRING),
    new PrettierTransform(DEFAULT_PRETTIER_OPTIONS),
    write
  );
}
