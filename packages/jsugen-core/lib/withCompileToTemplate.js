import { enrichInTemplate } from './utils';

const withCompileToTemplate = templateFn => context => {
  const raw = templateFn(context);

  return enrichInTemplate(context, { raw });
};

export default withCompileToTemplate;
