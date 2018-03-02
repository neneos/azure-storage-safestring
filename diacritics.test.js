const cleaner = require('./diacritics');

test('cleans crême brûléè to march creme brulee', () => {
  expect(cleaner.clean('crême brûléè')).toBe('creme brulee');
});