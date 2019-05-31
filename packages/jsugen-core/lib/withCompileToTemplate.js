import { enrichInTemplate } from './utils';

export function withCompileToTemplate(templateFn) {
  return context => {
    const raw = templateFn(context);

    return enrichInTemplate(context, { raw });
  };
}
