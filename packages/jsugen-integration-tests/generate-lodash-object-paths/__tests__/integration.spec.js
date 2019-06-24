import { generate } from '@sthzg/jsugen-generate-lodash-object-paths';
import {
  ARRAY_OF_OBJECTS_SCHEMA_PATH,
  CONTACT_SCHEMA_PATH,
  EXAMPLE_SCHEMA_PATH,
  DryRunWriteConfig as writeConfig,
} from '../../testUtils/helpers';

describe('generate-lodash-object-paths', () => {
  test('should pass full integration test', done => {
    expect.assertions(1);

    generate({ sourceFile: EXAMPLE_SCHEMA_PATH, writeConfig }).subscribe(
      output => {
        expect(output).toMatchSnapshot();
        done();
      },
    );
  });

  test('should pass example.contact.json integration test', done => {
    expect.assertions(1);

    generate({ sourceFile: CONTACT_SCHEMA_PATH, writeConfig }).subscribe(
      output => {
        expect(output).toMatchSnapshot();
        done();
      },
    );
  });

  test('should generate expected paths for array-of-objects properties', done => {
    expect.assertions(1);

    generate({
      sourceFile: ARRAY_OF_OBJECTS_SCHEMA_PATH,
      writeConfig,
    }).subscribe(output => {
      expect(output).toMatchSnapshot();
      done();
    });
  });
});
