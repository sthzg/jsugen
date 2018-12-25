import { Readable } from 'stream';
import { schemaWalk, vocabularies } from '@cloudflare/json-schema-walker';

export default function(schema) {
  const stream = new Readable({
    objectMode: true,
    read() {},
  });

  schemaWalk(
    schema,
    null,
    (subschema, path, parent, pathToParent) => {
      stream.push({
        schema: subschema,
        path,
        parent,
        pathToParent,
      });
    },
    vocabularies.DRAFT_04
  );
  stream.push(null);

  return stream;
}
