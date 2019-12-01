import { castArray } from 'lodash-es';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from './Data';

/**
 * Every step of a generator pipeline is expected to pass along an instance
 * of the `Context` object which it enriches and restructures as required.
 */
export class Context {
  static fromConfig(config) {
    return from(castArray(config)).pipe(map(() => new Context(config)));
  }

  /**
   *
   * @param {Config} config
   */
  constructor(config) {
    this.config = config;
    this.data = new Data();
  }
}
