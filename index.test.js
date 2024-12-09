const { sum, abs } = require("./index");

test("adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 100 - 50 to equal 50", () => {
  expect(sum(100, -50)).toBe(50);
});

test("abs add -100 - 50 to equal 150", () => {
  expect(abs(-100) + abs(50)).toBe(150);
});

test("abs add 100 - 50 to equal 50", () => {
  expect(abs(100) + abs(50)).toBe(150);
});
