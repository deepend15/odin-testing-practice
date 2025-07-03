import { analyzeArray } from "./analyze-array.js";

test('Analyze array [1, 8, 3, 4, 2, 6]', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyze array [-32, 73, 426, -88, 24, 123, -68, 5]', () => {
  expect(analyzeArray([-32, 73, 426, -88, 24, 123, -68, 5])).toEqual({
    average: expect.closeTo(57.875),
    min: -88,
    max: 426,
    length: 8,
  });
});