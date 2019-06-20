import { from } from 'rxjs';
import { concatMap, map, mergeMap } from 'rxjs/operators';
import { castArray } from 'lodash-es';
import {
  Context,
  enrichDataWithGenerateFunctions,
  enrichDataWithListOfSourceFilePaths,
  enrichDataWithOutputPath,
  enrichDataWithParsedSource,
  flattenContextOverDefinitions,
  flattenContextOverGenerators,
  flattenContextOverSourceFiles,
  runGenerator,
} from './internals';

export function generate({ config }) {
  return from(castArray(config)).pipe(
    map(Context.liftConfigToContext),
    mergeMap(flattenContextOverDefinitions),
    map(enrichDataWithListOfSourceFilePaths),
    map(enrichDataWithGenerateFunctions),
    mergeMap(flattenContextOverSourceFiles),
    mergeMap(flattenContextOverGenerators),
    map(enrichDataWithOutputPath),
    concatMap(enrichDataWithParsedSource),
    mergeMap(runGenerator),
  );
}
