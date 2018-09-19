const operations = require('../index');

test('adds 1 + 2 to equal 3', () => {
    expect(operations.sum(1, 2)).toBe(3);
});
