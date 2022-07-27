const add = function () {
  let result = 0
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}

const subtract = function () {
  let array = Array.from(arguments).sort((a, b) => {
    b - a
  })
  let result = array[0]
  for (let i = 1; i < array.length; i++) {
    result -= array[i]
  }
  return result
}

const sum = function (array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result
}

const multiply = function (array) {
  let result = 1
  for (let i = 0; i < array.length; i++) {
    result *= array[i]
  }
  return result
}

const power = function (num1, num2) {
  return Math.pow(num1, num2)
}

const factorial = function (num) {
  let result = 1
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
