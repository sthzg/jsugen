import mergeSet from '../mergeSet';

test('should create the expected nested object', () => {
  const result = mergeSet(
    { initial: 1 },
    { any: 1, 'nest.me.one': 1, 'nest.me.two': 2 },
  );

  expect(result).toEqual({
    initial: 1,
    any: 1,
    nest: {
      me: {
        one: 1,
        two: 2,
      },
    },
  });
});

test('should not mutate the targetObject', () => {
  const initial = { any: 1 };
  const result = mergeSet(initial, { any: 2 });

  expect(initial).toEqual({ any: 1 });
  expect(result).toEqual({ any: 2 });
});

test('should not set object keys if their values are undefined', () => {
  const result = mergeSet(
    {},
    {
      keep: 1,
      keep2: false,
      keep3: null,
      keep4: '',
      keep5: NaN,
      omit: undefined,
      'nest.omit': undefined,
    },
  );

  expect(result).toEqual({
    keep: 1,
    keep2: false,
    keep3: null,
    keep4: '',
    keep5: NaN,
  });
});
