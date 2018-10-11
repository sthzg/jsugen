const merge = require('lodash/merge');

function arrayToEnum(arr) {
  return arr.reduce((result, current) => merge({}, result, { [current]: current }), {});
}

module.exports = arrayToEnum;
