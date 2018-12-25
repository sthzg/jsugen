import merge from 'lodash.merge';

function arrayToEnum(arr) {
  return arr.reduce(
    (result, current) => merge({}, result, { [current]: current }),
    {}
  );
}

export default arrayToEnum;
