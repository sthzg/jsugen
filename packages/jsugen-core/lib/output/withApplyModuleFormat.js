import { get } from 'lodash-es';
import * as babel from '@babel/core';
import { ModuleFormat } from '../enums';

/**
 * For now a minimal local configuration to ensure that ESM can be
 * transpiled into CJS.
 */
const BABEL_CONFIG = {
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-syntax-export-default-from',
    '@babel/plugin-transform-modules-commonjs',
  ],
};

export function withApplyModuleFormat(writeConfig) {
  return content => {
    switch (writeConfig.moduleFormat) {
      case ModuleFormat.CJS: {
        return get(babel.transformSync(content, BABEL_CONFIG), 'code');
      }
      default: {
        return content;
      }
    }
  };
}
