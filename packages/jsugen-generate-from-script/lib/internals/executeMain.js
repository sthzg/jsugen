import { castArray } from 'lodash-es';

export async function executeMain(module) {
  const { main } = module;

  return castArray(main());
}
