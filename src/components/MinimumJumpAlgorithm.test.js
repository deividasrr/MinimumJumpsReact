import handleRun from "./MinimumJumpAlgorithm";

test("Minimum Jump algorithm generic cases", () => {
  expect(handleRun([1, 2, 0, 3, 0, 2, 0])).toBe(3);
  expect(handleRun([1, 2, 0, 1, 0, 2, 0])).toBe(-1);
  expect(handleRun([1, 3, 0, 0, 0, 1, 0])).toBe(-1);
  expect(handleRun([1, 1, 1])).toBe(2);
  expect(handleRun([5, 0, 0, 1])).toBe(1);
  expect(handleRun([2, 1, 2, 0, 1, 0, 0])).toBe(-1);
  expect(handleRun([2, 1, 2, 0, 1, 0, 0])).toBe(-1);
  expect(handleRun([1, 2, 0, 2, 1, 0, 0])).toBe(-1);
});

test("Minimum Jump algorithm edge cases", () => {
  expect(handleRun([1])).toBe(0);
  expect(handleRun([0])).toBe(0);
  //   expect(handleRun([])).toBe(-1);
  //   expect(handleRun(null)).toBe(-1);
  expect(handleRun(-1, 0)).toBe(-1);
});
