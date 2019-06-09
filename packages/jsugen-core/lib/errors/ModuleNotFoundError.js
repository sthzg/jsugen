import ExtendableError from 'es6-error';
import { EMPTY_STRING } from '../constants';
import { ERROR_CODES } from './constants';

export class ModuleNotFoundError extends ExtendableError {
  constructor(moduleName) {
    const message = `Unable to resolve generator: ${moduleName}`;
    super(message);

    this.stack = EMPTY_STRING;
    this.code = ERROR_CODES.INVALID_GENERATOR_MODULE;
  }
}
