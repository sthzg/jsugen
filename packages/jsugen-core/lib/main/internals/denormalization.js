import { withEnrichByFlattenOverArray } from '../../utils';

export const flattenContextOverDefinitions = withEnrichByFlattenOverArray({
  sourcePath: 'config.definitions',
  targetPath: 'data.definition',
  redactLabel: 'flattenContextOverDefinitions',
});

export const flattenContextOverGenerators = withEnrichByFlattenOverArray({
  sourcePath: 'data.generateFunctions',
  targetPath: 'data.generateFunction',
  redactLabel: 'flattenContextOverGenerators',
});

export const flattenContextOverSourceFiles = withEnrichByFlattenOverArray({
  sourcePath: 'data.sourceFiles',
  targetPath: 'data.sourceFile',
  redactLabel: 'flattenContextOverSourceFiles',
});
