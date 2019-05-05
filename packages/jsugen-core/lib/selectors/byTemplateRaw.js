import get from 'lodash-es/get';

const byTemplateRaw = context => get(context, 'template.raw');

export default byTemplateRaw;
