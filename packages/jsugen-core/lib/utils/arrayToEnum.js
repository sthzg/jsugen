import merge from 'lodash-es/merge';

function arrayToEnum(arr) {
  return arr.reduce(
    (result, current) => merge({}, result, { [current]: current }),
    {},
  );
}

export default arrayToEnum;
