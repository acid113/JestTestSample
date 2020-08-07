/* References:
 - https://www.youtube.com/watch?v=4Fl5GH4eYZ8&t=11s
 - https://github.com/academind/js-testing-introduction/tree/async-code
 - https://jestjs.io/docs/en/manual-mocks
*/

import { Add, Total, CloneArray, GetTitle } from "../utility/helper";

jest.mock("../utility/util"); // * enables mocking util.js module

// * Unit test
test("Test Add()", () => {
  expect(Add(1, 4)).toBe(5);
});

// * mocked Subtract() to return 1
const Subtract = jest.fn(() => 1);

test("Test Subtract()", () => {
  expect(Subtract(3, 2)).toEqual(1); // ! false positive
  expect(Subtract).toHaveBeenCalledTimes(1); // ? test a mocked function how many times it's called
  expect(Subtract).toHaveBeenCalledWith(3, 2);
  // expect(Subtract(1, 2)).toEqual(-1); // ? will fail since mocked Subtract() returns 1
});

test("Test Clone()", () => {
  const array1 = [1, 2];
  const array2 = [1, 2];

  expect(CloneArray(array1)).toEqual(array2); // ? will pass because toEqual checks by value
  // expect(CloneArray(array1)).toBe(array2); // ? will fail because CloneArray creates a new array object
  expect(CloneArray(array1)).not.toBe(array2); // ? will now pass
});

// * Integration test, includes testing Add()
test("Test Total()", () => {
  expect(Total(5, 20)).toBe("Php 25");
});

// * Async test
test("API async test", () => {
  // ! doesn't work?
  // GetTitle().then((response) => {
  //   expect(response).toEqual("delectus aut autem 1");
  // });

  // * actual API testing should be done in API development, not in front-end
  // return expect(GetTitle()).resolves.toEqual("delectus aut autem"); // ? will pass on actual API call
  return expect(GetTitle()).resolves.toEqual("delectus aut autem 1"); // ? will pass on mocked API call
});
