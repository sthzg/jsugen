/* eslint-disable global-require */
import get from 'lodash-es/get';
import * as babel from '@babel/core';
import { ModuleFormat } from '../enums';

/**
 * For now a minimal local configuration to ensure that ESM can be
 * transpiled into CJS.
 */
const BABEL_CONFIG = {
  plugins: [
    require('@babel/plugin-proposal-export-namespace-from'),
    require('@babel/plugin-syntax-export-default-from'),
    require('@babel/plugin-transform-modules-commonjs'),
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
