const ftoc = function (temp) {
  let result = 0
  result = (temp - 32) * (5 / 9)
  return Math.round(result * 10) / 10
}

const ctof = function (temp) {
  let result = 0
  result = temp * (9 / 5) + 32
  result.toFixed(1)
  return Math.round(result * 10) / 10
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
}
