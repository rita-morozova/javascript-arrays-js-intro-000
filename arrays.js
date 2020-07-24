var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOgArray(array, element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unsift(element)
  
}

function addElementToEndOfArray(array,element){
  newArray=[...array,element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array 
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length-1)
  return newArray
}