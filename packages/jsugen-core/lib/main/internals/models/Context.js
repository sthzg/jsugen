import { Data } from './Data';

/**
 * Every step of a generator pipeline is expected to pass along an instance
 * of the `Context` object which it enriches and restructures as required.
 */
export class Context {
  static liftConfigToContext(config) {
    return new Context(config);
  }

  constructor(config) {
    this.config = config;
    this.data = new Data();
  }
}
