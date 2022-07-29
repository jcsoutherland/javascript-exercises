const findTheOldest = function (array) {
  let currentOldest = array[0]
  let ageArray = []
  //let ageArray = [array[0]]
  //console.log(currentOldest.yearOfDeath)
  array.forEach((person) => {
    if (!person.yearOfDeath) {
      ageArray.push({
        index: array.indexOf(person),
        age: 2022 - person.yearOfBirth,
      })
    } else {
      ageArray.push({
        index: array.indexOf(person),
        age: person.yearOfDeath - person.yearOfBirth,
      })
    }
  })
  ageArray.sort(function (a, b) {
    return a.age - b.age
  })
  console.log(ageArray)
  const oldestID = ageArray[ageArray.length - 1].index
  return array[oldestID]
}

// Do not edit below this line
module.exports = findTheOldest
