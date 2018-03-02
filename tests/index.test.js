const cleaner = require('../index');

test('cleans crême brûléè to match creme-brulee', () => {
  expect(cleaner.cleanBlobName('crême brûléè')).
    toBe('creme-brulee');
});

test('cleans crême-bruléé.jpg to match creme-brulee.jpg', () => {
  expect(cleaner.cleanBlobName('crême-bruléé.jpg')).
    toBe('creme-brulee.jpg');
});

test('cleans apple\\pie to match apple/pie', () => {
  expect(cleaner.cleanBlobName('apple\\pie')).
    toBe('apple/pie');
});

test('Throws on to many virtual directories', () => {
  expect(() => {
    cleaner.cleanBlobName(`
    a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/
    a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/
    a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/
    a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/
    a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/
    a/a/a/a/a
    `)
  }).toThrowError('To many virtual directories')
});

test('Throws on empty string', () => {
  expect(() => {
    cleaner.cleanBlobName(``);
  }).toThrowError('String must be longer than 1 character');
});

test('throws on string longer than 1024', () => {
  expect(() => {
    cleaner.cleanBlobName(`
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee
    aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee`);
  }).toThrowError('String must be shorter than 1025 character');
});