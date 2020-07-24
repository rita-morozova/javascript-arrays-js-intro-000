var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOgArray(array, element){
  newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unsift(element);
  return array
}

function addElementToEndOfArray(array,element){
  newArray=[array, ...element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array 
}

function accessElementInArray(array, index){
  return array[index]
}