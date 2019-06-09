import { Data } from './Data';

export class Context {
  static liftConfigToContext(config) {
    return new Context(config);
  }

  constructor(config) {
    this.config = config;
    this.data = new Data();
  }
}
