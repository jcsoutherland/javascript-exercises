const removeFromArray = function () {
  let array = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    if (array.includes(arguments[i])) {
      array.splice(array.indexOf(arguments[i]), 1)
    }
  }
  console.log(array)
  return array
}

// Do not edit below this line
module.exports = removeFromArray
