function myEach(collection, callback) {
  for (let property in collection) {
    callback(collection[property])
    // console.log('below is property')
    // console.log(property) //element, such as beginning is 0 and last one is 3
    // console.log('below is collection')
    // console.log(collection) // [1,2,3,4] or {one: 1, two: 2, three: 3, four: 4}
    // console.log('below is collection[property]')
    // console.log(collection[property]) //key.value and element value
  }
  return collection
}

function myMap(collection, callback) {
  let newArray = []
  for (let property in collection) {
    newArray.push(callback(collection[property]))
  }
  return newArray
}

function myReduce(collection, callback, acc) {
  let copyArray = []
  let copyObject = []
  let accumulator = acc
  if (Array.isArray(collection)) {
    copyArray = [...collection]
    if (!accumulator) {
      accumulator = copyArray[0]
      copyArray = copyArray.slice(1)
    }
  } else {
    copyObject = Object.values(collection)
    // console.log('below is copyObject')
    // console.log(copyObject)
    if (!accumulator) {
      accumulator = copyObject[0]
      copyObject = copyObject.slice(1)
    }
  }
  if (Array.isArray(collection)) {
    for (let i = 0; i < copyArray.length; i++) {
      accumulator = callback(accumulator, copyArray[i], copyArray)
    }
  } else {
    for (let i = 0; i < copyObject.length; i++) {
      accumulator = callback(accumulator, copyObject[i], copyObject)
    }
  }
  return accumulator
}

function myFind(collection, predicate) {
  // console.log('below is collection')
  // console.log(collection)
  // console.log('below is predicate')
  // console.log(predicate) //this is a callback function that returns true or false
  for (let property in collection) {
    let element = collection[property]
    if (predicate(element)) {
      return element
    }
  }
}

function myFilter(collection, predicate) {
  let newArray = []
  for (let property in collection) {
    let element = collection[property]
    if (predicate(element)) {
      newArray.push(element)
      // console.log(newArray)
    }
  }
  return newArray
}

function mySize(collection) {
  // console.log(Object.keys(collection))
  // console.log(Object.keys(collection).length)
  return Object.keys(collection).length
}

function myFirst(array, n) {
  // console.log(array[0])
  // console.log(n)
  let set = n
  if (!set) {
    return array[0]
  } else {
    console.log(array.slice(0,n))
    return array.slice(0,n)
  }
}

function myLast(array, n) {
  let set = n
  let last = array.length - 1 
  console.log(last)
  if (!set) {
    return array[last]
  } else {
    console.log(array.slice(-n))
    return array.slice(-n)
  }
}

function myKeys(object) {
  console.log(Object.keys(object))
  let newArray = Object.keys(object)
  console.log(newArray)
  return newArray
}

function myValues(object) {
  let newArray = Object.values(object)
  console.log(newArray)
  return newArray
}