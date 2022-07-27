const sumAll = function (num1, num2) {
  if (
    typeof num1 != 'number' ||
    typeof num2 != 'number' ||
    num1 < 0 ||
    num2 < 0
  ) {
    return 'ERROR'
  }
  let result = 0
  const min = Math.min(num1, num2)
  const max = Math.max(num1, num2)
  for (let i = min; i <= max; i++) {
    result += i
  }
  return result
}

// Do not edit below this line
module.exports = sumAll
