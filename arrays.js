var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOgArray(array, element){
  newArray = array.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  newArray= array.unsift(element);
  return newArray;
}

function addElementToEndOfArray(array,element){
  return newArray=[array, ...element]
}