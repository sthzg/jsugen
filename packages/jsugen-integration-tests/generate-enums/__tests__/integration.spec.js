import { generate } from '@sthzg/jsugen-generate-enums';
import schema from '../../resources/example.schema';
import contactSchema from '../../resources/example.contact';

describe('generate-enums', () => {
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
