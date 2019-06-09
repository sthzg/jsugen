import ExtendableError from 'es6-error';
import { EMPTY_STRING } from '../constants';
import { ERROR_CODES } from './constants';

export class GenerateFunctionNotFoundError extends ExtendableError {
  constructor(moduleName) {
    const message = `Unable import "generate()" from ${moduleName}`;
    super(message);

    this.stack = EMPTY_STRING;
    this.code = ERROR_CODES.GENERATE_FUNCTION_NOT_FOUND;
  }
}
