import { arrayToEnum } from '../array';

describe('arrayToEnum', () => {
  test('should be failsafe', () => {
    const underTest = () => arrayToEnum();

    expect(underTest).not.toThrow();
  });

  test('should convert an array to an expected enum with uppercased keys', () => {
    const result = arrayToEnum(['hello', 'world']);

    expect(result).toMatchObject({
      HELLO: 'hello',
      WORLD: 'world',
    });
  });

  test(
    'should keep numbers by stringifying the key and keeping the number' +
      ' as value',
    () => {
      const result = arrayToEnum([1]);

      expect(result).toMatchObject({
        '1': 1,
      });
    },
  );

  test('should discard invalid array items', () => {
    const result = arrayToEnum(['a', 1, false, null, undefined, new Date()]);

    expect(result).toMatchObject({
      A: 'a',
      '1': 1,
    });
  });
});
