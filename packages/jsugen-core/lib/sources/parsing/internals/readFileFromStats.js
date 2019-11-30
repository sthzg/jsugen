import fs from 'fs';
import path from 'path';
import { Encoding } from '../../../enums';

export function readFileFromStats(stats) {
  const { assetsByChunkName, outputPath } = stats.toJson();
  const [filename] = Object.values(assetsByChunkName);
  const location = path.join(outputPath, filename);

  return fs.readFileSync(location, { encoding: Encoding.UTF8 });
}
