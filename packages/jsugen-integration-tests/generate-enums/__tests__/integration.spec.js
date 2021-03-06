import { generate } from '@sthzg/jsugen-generate-enums';
import {
  CONTACT_SCHEMA_PATH,
  EMPTY_SCHEMA_PATH,
  EXAMPLE_SCHEMA_PATH,
  DryRunWriteConfig as writeConfig,
} from '../../testUtils/helpers';

describe('generate-enums', () => {
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

  test('should not create the module if it has no transformed content', done => {
    expect.assertions(1);

    generate({ sourceFile: EMPTY_SCHEMA_PATH, writeConfig }).subscribe(
      output => {
        expect(output).toMatchSnapshot();
        done();
      },
    );
  });
});
