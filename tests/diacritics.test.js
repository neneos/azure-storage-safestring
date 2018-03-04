const cleaner = require('../diacritics');

test("Cleans aAáÁâÂàÀäÂ to aAaAaAaAaA", () => {
  expect(cleaner.clean("aAáÁâÂàÀäÂ")).toBe('aAaAaAaAaA');
});

test("Cleans eEéÉêÊèÈëË to eEeEeEeEeE", () => {
  expect(cleaner.clean("eEéÉêÊèÈëÊ")).toBe('eEeEeEeEeE');
});

test("Cleans oOóÓôÔòÒöÖ to oOoOoOoO", () => {
  expect(cleaner.clean("oOóÓôÔòÒöÖ")).toBe('oOoOoOoOoO');
});

test("Cleans iIíÍîÎìÌïÏ to iIiIiIiI", () => {
  expect(cleaner.clean("iIíÍîÎìÌïÏ")).toBe('iIiIiIiIiI');
});

test("Cleans uUúÚûÛùÙüÜ to uUuUuUuU", () => {
  expect(cleaner.clean("uUúÚûÛùÙüÜ")).toBe('uUuUuUuUuU');
});

test("cleans vicuña to vicuna", () => {
  expect(cleaner.clean('vicuña')).toBe('vicuna');
});

test("cleans Việt Nam to Viet Name", () => {
  expect(cleaner.clean('Việt Nam')).toBe('Viet Nam');
});

test('Cleans crême brûléè to match creme brulee', () => {
  expect(cleaner.clean('crême brûléè')).toBe('creme brulee');
});