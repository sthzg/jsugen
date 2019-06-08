import { generate } from '@sthzg/jsugen-generate-lodash-object-paths';
import schema from '../../resources/example.schema';
import contactSchema from '../../resources/example.contact';
import arrayOfObjectsSchema from '../../resources/example.array-of-objects.schema.json';

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
