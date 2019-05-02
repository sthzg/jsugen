import { byJsonSchemaEnumValues } from './selectors';
import { enrichInData } from './utils';

const enrichWithEnumValues = context => {
  const { schema } = context;

  return enrichInData(context, { enumValues: byJsonSchemaEnumValues(schema) });
};

export default enrichWithEnumValues;
