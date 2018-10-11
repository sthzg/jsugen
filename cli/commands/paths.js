/* eslint-disable global-require,import/no-dynamic-require */
const { generateObjectPathsModule } = require('../../lib');
const { outOption, schemaOption } = require('../commonOptions');

// ---
// Handler.
// ---
module.exports.handler = argv => {
  const { schema: schemaPath, out } = argv;
  const schema = require(schemaPath);
  generateObjectPathsModule({ schema, out });
};

// ---
// Builder.
// ---
module.exports.builder = yargs =>
  yargs.options({
    schema: schemaOption,
    out: outOption,
  });
