import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { castArray } from 'lodash-es';
import { Context } from './models';
import {
  enrichDataWithGenerateFunctions,
  enrichDataWithListOfSourceFilePaths,
  enrichDataWithOutputPath,
  flattenContextOverDefinitions,
  flattenContextOverGenerators,
  flattenContextOverSourceFiles,
} from './internals';
import { runGenerator } from '../runGenerator';

export function generate({ config }) {
  return from(castArray(config)).pipe(
    map(Context.liftConfigToContext),
    mergeMap(flattenContextOverDefinitions),
    map(enrichDataWithListOfSourceFilePaths),
    map(enrichDataWithGenerateFunctions),
    mergeMap(flattenContextOverSourceFiles),
    mergeMap(flattenContextOverGenerators),
    map(enrichDataWithOutputPath),
    mergeMap(runGenerator),
  );
}
