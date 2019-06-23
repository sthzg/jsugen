import webpack from 'webpack';
import { buildWebpackConfig } from './buildWebpackConfig';
import { readFileFromStats } from './readFileFromStats';

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
        return reject(error);
      }

      if (stats.hasErrors()) {
        return reject(stats.toJson().errors);
      }

      return resolve(readFileFromStats(stats));
    });
  });
}
