const palindromes = function (inputString) {
  const str = inputString.replace(/[^a-zA-z]/g, '').toLowerCase()
  console.log(str)
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i] && i <= str.length - 1 - i) {
      return false
    }
  }
  return true
}

// Do not edit below this line
module.exports = palindromes
