import get from 'lodash.get';

const byTemplateRaw = context => get(context, 'template.raw');

export default byTemplateRaw;
