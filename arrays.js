var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOgArray(array, element){
  newArray = [element, ... array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  newArray= array.unsift(element);
  return newArray;
}