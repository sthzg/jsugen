import get from 'lodash-es/get';

export function byTemplateRaw(context) {
  return get(context, 'template.raw');
}
