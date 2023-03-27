import fibsRec from "./fib"

test("check base case: n < 2", () => {  
  expect(fibsRec(0)).toBe(0);
  expect(fibsRec(1)).toBe(1); 
})

test("check case: n = 2", () => {
  expect(fibsRec(2)).toBe(1);
})

test("check more cases", () => {
  expect(fibsRec(3)).toBe(2);
  expect(fibsRec(5)).toBe(5);
  expect(fibsRec(10)).toBe(55); 
  expect(fibsRec(12)).toBe(144); 
})