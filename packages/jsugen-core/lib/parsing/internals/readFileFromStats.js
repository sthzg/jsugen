import fs from 'fs';
import path from 'path';
import { ENCODING } from '../../constants';

export function readFileFromStats(stats) {
  const { assetsByChunkName, outputPath } = stats.toJson();
  const [filename] = Object.values(assetsByChunkName);
  const location = path.join(outputPath, filename);

  return fs.readFileSync(location, { encoding: ENCODING.UTF8 });
}
