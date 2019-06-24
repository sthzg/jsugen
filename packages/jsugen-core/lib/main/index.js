import { from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { castArray } from 'lodash-es';
import {
  Context,
  enrichDataWithGenerateFunctions,
  enrichDataWithListOfSourceFilePaths,
  enrichDataWithOutputPath,
  flattenContextOverDefinitions,
  flattenContextOverGenerators,
  flattenContextOverSourceFiles,
  runGenerator,
} from './internals';

export function generate({ config }) {
  return from(castArray(config)).pipe(
    map(Context.liftConfigToContext),
    concatMap(flattenContextOverDefinitions),
    map(enrichDataWithListOfSourceFilePaths),
    map(enrichDataWithGenerateFunctions),
    concatMap(flattenContextOverSourceFiles),
    concatMap(flattenContextOverGenerators),
    map(enrichDataWithOutputPath),
    concatMap(runGenerator),
  );
}
