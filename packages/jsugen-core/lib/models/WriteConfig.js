import { ENCODING } from '../constants';
import { ModuleFormat } from '../enums';

export class WriteConfig {
  constructor({
    dryRun = false,
    silent = false,
    encoding = ENCODING.UTF8,
    moduleFormat = ModuleFormat.ESM,
    directory,
    filename,
  }) {
    /**
     * Path to the output directory.
     */
    this.directory = directory;

    /**
     * Filename for the generated module.
     */
    this.filename = filename;

    /**
     * Defines the module format for the generated file.
     * Defaults to ESM, uses babel to transpile to CJS if defined.
     */
    this.moduleFormat = moduleFormat;

    /**
     * File encoding.
     */
    this.encoding = encoding;

    /**
     * If true all modules will be written to stdout.
     */
    this.dryRun = dryRun;

    /**
     * Skips logging to console if true.
     */
    this.silent = silent;
  }
}
