import { generate } from '@sthzg/jsugen-generate-member-names';
import {
  CONTACT_SCHEMA_PATH,
  EXAMPLE_SCHEMA_PATH,
  DryRunWriteConfig as writeConfig,
} from '../../testUtils/helpers';

describe('generate-member-names', () => {
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
});
