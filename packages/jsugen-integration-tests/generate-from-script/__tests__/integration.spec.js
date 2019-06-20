import path from 'path';
import { generate } from '@sthzg/jsugen-generate-from-script';
import {
  DryRunWriteConfig as writeConfig,
  TEST_RESOURCES_DIR,
} from '../../testUtils/helpers';

const TEST_FILE = path.join(
  TEST_RESOURCES_DIR,
  'fromScript/example.codegen.js',
);

describe('generate-from-script', () => {
  test('should pass integration test', done => {
    expect.assertions(1);

    generate({ sourceFile: TEST_FILE, writeConfig }).subscribe(output => {
      expect(output).toMatchSnapshot();
      done();
    });
  });
});
