const fibonacci = function (num) {
  if (+num < 0) {
    return 'OOPS'
  }
  let result = [0, 1]
  for (let i = 2; i <= +num; i++) {
    result.push(result[i - 1] + result[i - 2])
  }
  return result[+num]
}

// Do not edit below this line
module.exports = fibonacci
