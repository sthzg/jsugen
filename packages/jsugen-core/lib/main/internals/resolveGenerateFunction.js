import { attempt, isError, isFunction } from 'lodash-es';
import {
  GenerateFunctionNotFoundError,
  ModuleNotFoundError,
} from '../../errors';
import { GenerateFunction } from './models';

export function resolveGenerateFunction(moduleName) {
  const maybeModule = attempt(require, moduleName);

  if (isError(maybeModule)) {
    return new ModuleNotFoundError(moduleName);
  }

  return isFunction(maybeModule.generate)
    ? new GenerateFunction(moduleName, maybeModule.generate)
    : new GenerateFunctionNotFoundError(moduleName);
}
