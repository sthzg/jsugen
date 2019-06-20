import get from 'lodash-es/get';
import webpack from 'webpack';
import { EMPTY_STRING } from '@sthzg/jsugen-core';
import { buildWebpackConfig } from './buildWebpackConfig';

const FIRST_MODULE_SOURCE_PATH = ['modules', 0, 'source'];

/**
 * Compiles `sourceFile` to the Javascript module format.
 *
 * @param sourceFile absolute path to source file
 */
export async function transformToJavascript(sourceFile) {
  const config = buildWebpackConfig(sourceFile);

  return new Promise((resolve, reject) => {
    webpack(config, (error, stats) => {
      if (error) {
        reject(error);
      }

      const source = get(
        stats.toJson(),
        FIRST_MODULE_SOURCE_PATH,
        EMPTY_STRING,
      );

      resolve(source);
    });
  });
}
