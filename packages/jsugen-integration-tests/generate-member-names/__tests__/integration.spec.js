import { generate } from '@sthzg/jsugen-generate-member-names';
import schema from '../../resources/example.schema';
import contactSchema from '../../resources/example.contact';

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
