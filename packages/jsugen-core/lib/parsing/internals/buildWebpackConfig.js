import os from 'os';
import path from 'path';
import { UNDERSCORE } from '../../constants';

/**
 * Builds a Webpack configuration to compile `sourceFile` into a JS module.
 *
 * @param sourceFile absolute path to source file
 * @param options options object to modify and extend configured loaders
 */
export function buildWebpackConfig(sourceFile, options = {}) {
  const entryKey = byEntryKey(sourceFile);
  const babelLoaderConfig = byBabelLoaderConfig(options);

  return {
    mode: 'production',
    target: 'node',
    cache: false,
    entry: {
      [entryKey]: sourceFile,
    },
    output: {
      filename: '[name].[hash].js',
      libraryTarget: 'commonjs2',
      path: path.join(os.tmpdir(), 'jsugen/sources'),
    },
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          type: 'javascript/auto',
          loader: 'json5-loader',
        },
        {
          test: /\.json5$/,
          loader: 'json5-loader',
        },
        {
          test: /\.m?js$/,
          use: babelLoaderConfig,
        },
      ],
    },
    resolveLoader: {
      modules: [
        './node_modules/@sthzg/jsugen-core/node_modules',
        'node_modules',
      ],
    },
  };
}

/**
 * @private Returns a unique key name for the processed source file.
 *
 * @param sourceFile Absolute path to the entry point.
 */
function byEntryKey(sourceFile) {
  return path
    .dirname(sourceFile)
    .split(path.sep)
    .join(UNDERSCORE)
    .toLowerCase();
}

/**
 * @private Returns the babel loader configuration object.
 *
 * @param options.babelConfigPath
 *        The absolute file path to a custom babel configuration file. Can
 *        be passed by the user to inject their project's Babel settings
 *        over the defaults.
 */
function byBabelLoaderConfig(options) {
  const { babelConfigPath } = options;

  const queryOrOptions = babelConfigPath
    ? { query: { extends: babelConfigPath } }
    : {
        options: {
          plugins: ['@babel/plugin-transform-modules-commonjs'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current',
                },
              },
            ],
          ],
        },
      };

  return {
    loader: 'babel-loader',
    ...queryOrOptions,
  };
}
