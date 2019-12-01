import { concatMap, map } from 'rxjs/operators';
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

/**
 * Main generator that runs all generators configured in `config`.
 *
 * @param config - instance of .jsugen.config.js
 */
export function generate({ config }) {
  return Context.fromConfig(config).pipe(
    concatMap(flattenContextOverDefinitions),
    map(enrichDataWithListOfSourceFilePaths),
    map(enrichDataWithGenerateFunctions),
    concatMap(flattenContextOverSourceFiles),
    concatMap(flattenContextOverGenerators),
    map(enrichDataWithOutputPath),
    concatMap(runGenerator),
  );
}
