import { enrichInData } from './utils';

const enrichWithType = context => {
  const {
    schema: { type },
  } = context;

  return enrichInData(context, {
    type,
  });
};

export default enrichWithType;
