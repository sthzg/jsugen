import castArray from 'lodash-es/castArray';

export async function executeMain(module) {
  const { main } = module;

  return castArray(main());
}
