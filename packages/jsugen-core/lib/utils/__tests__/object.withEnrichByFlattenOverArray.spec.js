import { withEnrichByFlattenOverArray } from '../object';

describe('withEnrichByFlattenOverArray', () => {
  test('should return a function', () => {
    const enrichByFlattenOverArray = withEnrichByFlattenOverArray({});
    expect(enrichByFlattenOverArray).toBeInstanceOf(Function);
  });

  test('should create an array of objects flattened over the array given in `sourcePath`', () => {
    const input = {
      sourceArray: [{ id: 'first_item' }, { id: 'second item' }],
      anyOtherValue: 'foo',
    };
    const enrichByFlattenOverArray = withEnrichByFlattenOverArray({
      sourcePath: 'sourceArray',
      targetPath: 'targetPath',
      redactLabel: '"unit test"',
    });
    const result = enrichByFlattenOverArray(input);

    expect(result).toEqual([
      {
        sourceArray: '[lifecycle]: consumed in "unit test"',
        anyOtherValue: 'foo',
        targetPath: { id: 'first_item' },
      },
      {
        sourceArray: '[lifecycle]: consumed in "unit test"',
        anyOtherValue: 'foo',
        targetPath: { id: 'second item' },
      },
    ]);
  });
});
