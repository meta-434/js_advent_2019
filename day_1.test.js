const day_1 = require('./day_1');

test('non-floor rounding fuel calculation correct', () => {
    expect(day_1([12])).toBe(2);
})

test('floor rounding fuel calculation correct', () => {
    expect(day_1([14])).toBe(2);
})

test('reduces fuel calculations correctly', () => {
    expect(day_1([14, 12])).toBe(4);
})