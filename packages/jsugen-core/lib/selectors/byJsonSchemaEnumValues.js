import get from 'lodash.get';

const byJsonSchemaEnumValues = (schema = {}) => get(schema, 'enum');

export default byJsonSchemaEnumValues;
