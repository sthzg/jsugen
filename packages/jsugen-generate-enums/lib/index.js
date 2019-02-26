import { createWriteStream } from 'fs';
import { pipeline as pipelineFn } from 'stream';
import { promisify } from 'util';
import {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
} from '@sthzg/jsugen-core/lib/constants';
import {
  BuildObjectPathsTransform,
  CompileToTemplateTransform,
  FilterEnumsTransform,
  FilterSchemaKeywordsTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  PrependToFileTransform,
  PrettierTransform,
  StdoutWritable,
} from '@sthzg/jsugen-core/lib/streams';
import enumModuleTemplate from './enum.tpl';

const pipeline = promisify(pipelineFn);

function generateEnumsModule({ schema, out }) {
  const write = out ? createWriteStream(out) : new StdoutWritable();

  return pipeline(
    jsonSchemaReadable(schema),
    new FilterSchemaKeywordsTransform(),
    new FilterEnumsTransform(),
    new BuildObjectPathsTransform(),
    new CompileToTemplateTransform(enumModuleTemplate),
    new MemorySinkTransform(),
    new PrependToFileTransform(DEFAULT_FILE_DOCSTRING),
    new PrettierTransform(DEFAULT_PRETTIER_OPTIONS),
    write
  );
}

export default generateEnumsModule;
