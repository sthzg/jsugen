import { enrichIn, enrichInData, enrichInTemplate } from '../enrichIn';

describe('enrichIn', () => {
  test('should work without a given prefix', () => {
    const result = enrichIn({}, { any: 1 });

    expect(result).toEqual({ any: 1 });
  });

  test('should enrich object in the path defined by prefix', () => {
    const singlePrefix = enrichIn({}, { any: 1 }, 'thePrefix');
    const nestedPrefix = enrichIn({}, { any: 1 }, 'thePrefix.nested');

    expect(singlePrefix).toEqual({ thePrefix: { any: 1 } });
    expect(nestedPrefix).toEqual({ thePrefix: { nested: { any: 1 } } });
  });
});

describe('enrichInData', () => {
  test('should enrich object values in the `data` path', () => {
    const result = enrichInData({}, { any: 1 });

    expect(result).toEqual({ data: { any: 1 } });
  });
});

describe('enrichInTemplate', () => {
  test('should enrich object values in the `template` path', () => {
    const result = enrichInTemplate({}, { any: 1 });

    expect(result).toEqual({ template: { any: 1 } });
  });
});
