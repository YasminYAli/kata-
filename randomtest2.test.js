const { removeLetter } = require("./randomtest2.js");

test("remove first and last letter of name", () => {
  const actual = removeLetter("James");
  const expected = "ame";
  expect(actual).toBe(expected);
});

test("remove first and last letter of name", () => {
  const actual = removeLetter("Stephanie");
  const expected = "tephani";
  expect(actual).toBe(expected);
});

test("remove first and last letter of name", () => {
  const actual = removeLetter("Gloria");
  const expected = "lori";
  expect(actual).toBe(expected);
});
