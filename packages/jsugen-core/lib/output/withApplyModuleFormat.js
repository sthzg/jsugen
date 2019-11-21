import { get } from 'lodash-es';
import * as babel from '@babel/core';
import { ModuleFormat } from '../enums';

export function withApplyModuleFormat(writeConfig, babelConfig) {
  return content => {
    switch (writeConfig.moduleFormat) {
      case ModuleFormat.CJS: {
        return get(babel.transformSync(content, babelConfig), 'code');
      }
      default: {
        return content;
      }
    }
  };
}
