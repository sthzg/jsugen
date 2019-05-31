#!/usr/bin/env node

import yargs from 'yargs';
import {
  builder as builderCmd,
  enums as enumsCmd,
  paths as pathsCmd,
  selectors as selectorsCmd,
} from '../commands';

// eslint-disable-next-line import/no-default-export
export default yargs
  .usage('$0 <cmd> [args]')
  .command(
    ['generate-object-paths [schema]', 'paths'],
    'generate a module that exports all object selector path strings with dot notation',
    pathsCmd.builder,
    pathsCmd.handler,
  )
  .command(
    ['generate-enums [schema]', 'enums'],
    'generate a module that exports all values defined as enums in the json schema',
    enumsCmd.builder,
    enumsCmd.handler,
  )
  .command(
    ['generate-selectors [schema]', 'selectors'],
    'generate a module that exports selector functions for all values defined in the json schema',
    selectorsCmd.builder,
    selectorsCmd.handler,
  )
  .command(
    ['generate-builder [schema]', 'builder'],
    'generate a module that exports a builder function',
    builderCmd.builder,
    builderCmd.handler,
  )
  .help().argv;
