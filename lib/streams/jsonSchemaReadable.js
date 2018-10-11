const { Readable } = require('stream');
const { schemaWalk, vocabularies } = require('@cloudflare/json-schema-walker');

module.exports = schema => {
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
};
