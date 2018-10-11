/* eslint-disable global-require,import/no-dynamic-require */
const { generateEnumsModule } = require('../../lib');
const { outOption, schemaOption, prettierOption } = require('../commonOptions');

// ---
// Handler.
// ---
module.exports.handler = argv => {
  const { schema: schemaPath, out } = argv;
  const schema = require(schemaPath);
  generateEnumsModule({ schema, out });
};

// ---
// Builder.
// ---
module.exports.builder = yargs =>
  yargs.options({
    schema: schemaOption,
    out: outOption,
    prettier: prettierOption,
  });
