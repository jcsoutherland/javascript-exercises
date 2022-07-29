const getTheTitles = function (array) {
  let result = []
  array.forEach((book) => {
    result.push(book.title)
  })
  return result
}

// Do not edit below this line
module.exports = getTheTitles
