/* eslint-disable class-methods-use-this */
import { Writable } from 'stream';

class StdoutWritable extends Writable {
  _write(chunk, encoding, callback) {
    process.stdout.write(chunk.toString());
    callback();
  }
}

export default StdoutWritable;
