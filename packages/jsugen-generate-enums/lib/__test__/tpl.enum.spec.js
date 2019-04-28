import enumTpl from '../enum.tpl';

test('should generate the expected template output', () => {
  const ANY_STRING_VALUE = 'any string';
  const ANY_NUMBER_VALUE = 99;

  const content = enumTpl({
    data: {
      pathName: 'any_name',
    },
    schema: {
      enum: [ANY_STRING_VALUE, ANY_NUMBER_VALUE],
    },
  });

  expect(content).toMatchSnapshot();
});
