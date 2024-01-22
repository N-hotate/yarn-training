'use strict';

/**
 * 数値の配列を受け取って、その配列の合計を返す関数
 */
function add(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

module.exports = { add };