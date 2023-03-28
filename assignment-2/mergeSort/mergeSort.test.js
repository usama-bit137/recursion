import mergeSort from "./mergeSort";

test("splits the array and returns the left half", () => {
  expect(mergeSort([1,2,3,2,1]).arrayLeft).toStrictEqual([1,2,3]); 
  expect(mergeSort([1,3,4,5]).arrayLeft).toStrictEqual([1,3]);
  expect(mergeSort([1,2,3,2,1]).arrayRight).toStrictEqual([2,1]); 
  expect(mergeSort([1,3,4,5]).arrayRight).toStrictEqual([4,5]);
})

test("[] => []", () => {
  expect(mergeSort([])).toStrictEqual([]);
})

test("array of length 1 [a] => [a]", () => {
  expect(mergeSort([26])).toStrictEqual([26]);
})
