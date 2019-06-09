import { generate } from '@sthzg/jsugen-core';
import path from 'path';

const OUT_DIR = path.resolve(__dirname, '../out');

const config = {
  dryRun: true,
  definitions: [
    {
      name: 'schemas',
      source: 'json-schema',
      files: ['**/globTesting/**/*.schema.json'],
      generators: [
        '@sthzg/jsugen-generate-selector-functions',
        '@sthzg/jsugen-generate-lodash-object-paths',
      ],
      output: {
        baseDirectory: OUT_DIR,
      },
    },
  ],
};

test('should glob the expected files and run the configured generators', done => {
  expect.assertions(4);

  generate({ config }).subscribe(output => {
    expect(output).toMatchSnapshot();
    done();
  });
});
