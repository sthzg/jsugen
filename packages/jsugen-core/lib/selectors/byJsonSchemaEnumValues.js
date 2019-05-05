import get from 'lodash-es/get';

const byJsonSchemaEnumValues = (schema = {}) => get(schema, 'enum');

export default byJsonSchemaEnumValues;
