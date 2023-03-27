function merge(sortFirst, sortSecond) {
    let sorted = [];
    
    while (sortFirst.length && sortSecond.length) {
        if (sortFirst[0] > sortSecond[0]){
            sorted.push(sortFirst.shift());
        } else {
            sorted.push(sortSecond.shift());
        }
    } 

    return [ ...sorted, ...sortFirst, ...sortSecond]
}
/*
function mergeSort(array){
    let sorted = [];
    let sortFirst = [];
    let sortSecond = [];

    if (array.length < 2) {
        sortFirst.push(array); 
        console.log(sortFirst);
    } else if (array.length === 2) {
        if (array[0] > array[1]) {
            sortSecond.push(array.reverse());
        } else {
            sortSecond.push(array);
        }
        console.log(merge(sorted, sortFirst, sortSecond));
    } else {    
        // split the array up but we don't want to redefine
        // this each time.  
        arrayLeft = array.slice(0, Math.floor(array.length/2)); 
        arrayRight = array.slice(Math.floor(array.length/2));
        mergeSort(arrayRight);
        mergeSort(arrayLeft);
    } 
    console.log(sorted);

}

mergeSort([22, 13, 10]);
//console.log(`sorted array is ${sorted}`); 
*/
//, 4, 35, 6, 10

console.log(merge([1], [2]));
