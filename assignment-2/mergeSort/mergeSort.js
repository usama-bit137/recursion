function mergeSort(array) {
  // what do we do in the base case?
  if (array.length <= 1){
    return array
  } 
 
  return {
    "arrayLeft" : array.splice(0, Math.ceil(array.length/2)), 
    "arrayRight" :  array.slice(-Math.round(array.length/2)+1)
  }
  
}

module.exports = mergeSort;