/**
 * Note: Babel is currently only used to support the ES modules in Jest.
 * Its role will likely change in the future (through native module support,
 * ESM compatibility with Jest, or simply by moving to Babel completely).
 */
module.exports = {
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
};
