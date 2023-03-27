function fibs(n) {
   let array = []; 

   let fibZero = 0;
   let fibOne = 1; 
   let fibNext;

   array.push(fibZero);
   
   if (n >= 1) {
    array.push(1);

   for (let i = 1; i < n; i++) {
    fibNext = fibOne + fibZero;
    fibZero = fibOne;
    fibOne = fibNext;
    array.push(fibNext);
    }
   } return array
}

function fibsRec(n) {
  return n < 2 ? n : fibsRec(n-1) + fibsRec(n-2);
}

module.exports = fibsRec;