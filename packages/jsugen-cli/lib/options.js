import { resolve } from 'path';

export const schemaOption = {
  type: 'string',
  describe: 'path to json schema file to generate utils from',
  coerce: resolve,
  normalize: true,
  required: true,
};

export const outOption = {
  type: 'string',
  coerce: resolve,
  normalize: true,
};

export const dryRunOption = {
  type: 'boolean',
  description: 'outputs results to stdout rather than writing to a file',
};
