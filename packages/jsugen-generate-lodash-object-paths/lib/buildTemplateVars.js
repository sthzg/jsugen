import {
  enrichInTemplate,
  toUpperSnakeCase,
} from '@sthzg/jsugen-core/lib/utils';

const POSTFIX = { PATH: 'Path' };

/**
 * Transforms `context.data` to the template variables.
 */
const buildTemplateVars = context => {
  const {
    data: { pathName, pathInDotNotation },
  } = context;

  const vars = {
    name: toUpperSnakeCase(pathName, POSTFIX.PATH),
    path: pathInDotNotation,
  };

  return enrichInTemplate(context, { vars });
};

export default buildTemplateVars;
