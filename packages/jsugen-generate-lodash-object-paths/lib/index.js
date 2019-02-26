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
  FilterSchemaKeywordsTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  PrependToFileTransform,
  PrettierTransform,
  StdoutWritable,
} from '@sthzg/jsugen-core/lib/streams';
import objectPathConstant from './objectPathConst.tpl';

const pipeline = promisify(pipelineFn);

function generateObjectPathsModule({ schema, out }) {
  const write = out ? createWriteStream(out) : new StdoutWritable();

  return pipeline(
    jsonSchemaReadable(schema),
    new FilterSchemaKeywordsTransform(),
    new BuildObjectPathsTransform(),
    new CompileToTemplateTransform(objectPathConstant),
    new MemorySinkTransform(),
    new PrependToFileTransform(DEFAULT_FILE_DOCSTRING),
    new PrettierTransform(DEFAULT_PRETTIER_OPTIONS),
    write
  );
}

export default generateObjectPathsModule;
