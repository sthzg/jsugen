import { ENCODING } from '../constants';

export class WriteConfig {
  constructor({
    dryRun = false,
    encoding = ENCODING.UTF8,
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
     * File encoding.
     */
    this.encoding = encoding;

    /**
     * If true all modules will be written to stdout.
     */
    this.dryRun = dryRun;
  }
}
