import schema from '@sthzg/jsugen-core/lib/sources/jsonSchema/testResources/example.schema';
import contactSchema from '@sthzg/jsugen-core/lib/sources/jsonSchema/testResources/example.contact';
import arrayOfObjectsSchema from '@sthzg/jsugen-core/lib/sources/jsonSchema/testResources/example.array-of-objects.schema.json';
import { generateObjectPathsModule as generate } from '../index';

describe('generate-lodash-object-paths', () => {
  test('should pass full integration test', done => {
    expect.assertions(1);

    generate({ schema }).subscribe(output => {
      expect(output).toMatchSnapshot();
      done();
    });
  });

  test('should pass example.contact.json integration test', done => {
    expect.assertions(1);

    generate({ schema: contactSchema }).subscribe(output => {
      expect(output).toMatchSnapshot();
      done();
    });
  });

  test('should generate expected paths for array-of-objects properties', done => {
    expect.assertions(1);

    generate({ schema: arrayOfObjectsSchema }).subscribe(output => {
      expect(output).toMatchSnapshot();
      done();
    });
  });
});
