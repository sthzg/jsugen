import { get } from 'lodash-es';

export function byContextDataDefinition(context) {
  return get(context, 'data.definition');
}

export function byContextDataDefinitionFiles(context) {
  return get(byContextDataDefinition(context), 'files', []);
}

export function byContextDataDefinitionIgnore(context) {
  return get(
    byContextDataDefinition(context),
    'ignore',
    '**/node_modules/**/*',
  );
}

export function byContextDataDefinitionGenerators(context) {
  return get(byContextDataDefinition(context), 'generators', []);
}

export function byContextDataDefinitionOutputBaseDirectory(context) {
  return get(byContextDataDefinition(context), 'output.baseDirectory');
}

export function byContextDataSourceFile(context) {
  return get(context, 'data.sourceFile');
}
