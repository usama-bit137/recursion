/* 

Fibonacci has two base cases. The 0th element = 1 and
1st element is also 1. 

Fibonacci numbers: 1, 1, 2, 3, 5, 8, 13, 21, ...

*/

function fibs(n) {
    /*
    @params: n = order of the fibonacci number.
    */ 

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
    if (n < 2){return n}; 
    return fibsRec(n-1) + fibsRec(n-2);
}

console.log(`First 10th fibonacci numbers are ${fibs(10)}`);
console.log(`7th Fibonacci number using recursive method ${fibsRec(7)}`); 