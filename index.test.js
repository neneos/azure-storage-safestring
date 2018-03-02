const cleaner = require('./index');

test('cleans crême brûléè to march creme brulee', () => {
    expect(cleaner.clean('Crême brûléè')).toBe('creme brulee');
  });