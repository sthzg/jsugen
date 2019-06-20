import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { ENCODING } from '@sthzg/jsugen-core';
import { buildWebpackConfig } from './buildWebpackConfig';

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

      resolve(readTransformedFile(stats));
    });
  });
}

function readTransformedFile(stats) {
  const { assetsByChunkName, outputPath } = stats.toJson();
  const [filename] = Object.values(assetsByChunkName);
  const location = path.join(outputPath, filename);

  return fs.readFileSync(location, { encoding: ENCODING.UTF8 });
}
