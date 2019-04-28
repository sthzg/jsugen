import schema from '@sthzg/jsugen-core/lib/testResources/example.schema';
import generate from '../index';

test('generate-selector-functions integration test', () => {
  expect.assertions(1);

  generate({ schema }).subscribe(output => {
    expect(output).toMatchSnapshot();
  });
});
