import schema from '@sthzg/jsugen-core/lib/sources/jsonSchema/testResources/example.schema';
import contactSchema from '@sthzg/jsugen-core/lib/sources/jsonSchema/testResources/example.contact';
import { generateMemberNamesModule as generate } from '../index';

describe('generate-member-names', () => {
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
});
