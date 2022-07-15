import attempt from 'lodash-es/attempt';
import isError from 'lodash-es/isError';
import isFunction from 'lodash-es/isFunction';
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
