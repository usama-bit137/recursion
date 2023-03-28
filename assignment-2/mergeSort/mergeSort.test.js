import mergeSort from "./mergeSort";

test("test an array of odd length", () => {
  expect(mergeSort([1, 32, 12, 20, 10])).toStrictEqual([1,10,12,20,32])
})

test("test an array of even length", () => {
  expect(mergeSort([2, 1, 32, 12, 20, 10])).toStrictEqual([1,2,10,12,20,32])
})

