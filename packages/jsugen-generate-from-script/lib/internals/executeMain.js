import castArray from 'lodash/castArray';

export async function executeMain(module) {
  const { main } = module;

  return castArray(main());
}
