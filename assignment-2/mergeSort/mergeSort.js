function merge(left, right) {
  let array = [];
  
  while(left.length && right.length) {
    left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift());
  }
  return [...array, ...left, ...right]
}

function mergeSort(array) {
  const midpoint = array.length/2; 
  
  if (array.length < 2) {
    return array
  } 
  
  const left = array.splice(0, midpoint)
  return merge(mergeSort(left), mergeSort(array))
}

console.log(mergeSort([12, 26, 2,10]));


module.exports = mergeSort;