import { generate } from '@sthzg/jsugen-generate-lodash-object-paths';
import schema from '../../resources/example.schema';
import contactSchema from '../../resources/example.contact';
import arrayOfObjectsSchema from '../../resources/example.array-of-objects.schema.json';
import { DryRunWriteConfig as writeConfig } from '../../testUtils/helpers';

describe('generate-lodash-object-paths', () => {
  test('should pass full integration test', done => {
    expect.assertions(1);

    generate({ schema, writeConfig }).subscribe(output => {
      expect(output).toMatchSnapshot();
      done();
    });
  });

  test('should pass example.contact.json integration test', done => {
    expect.assertions(1);

    generate({ schema: contactSchema, writeConfig }).subscribe(output => {
      expect(output).toMatchSnapshot();
      done();
    });
  });

  test('should generate expected paths for array-of-objects properties', done => {
    expect.assertions(1);

    generate({ schema: arrayOfObjectsSchema, writeConfig }).subscribe(
      output => {
        expect(output).toMatchSnapshot();
        done();
      },
    );
  });
});
