const day_2 = require('./day_2');
const day_2_data = require('./day_2_data');

test('it handles op code 99 (break) correctly', () => {
    expect(day_2([99, 1, 2, 5, 2, 5, 3, 5])).toEqual([99, 1, 2, 5, 2, 5, 3, 5]);
})

test('it handles opcode 2 (mult) correctly', () => {
    expect(day_2([2, 1, 5, 6, 99, 100, 75])).toEqual([2, 1, 5, 6, 99, 100, 100]);
})

test('it handles opcode 1 (add) correctly', () => {
    expect(day_2([1, 1, 5, 6, 99, 100, 75])).toEqual([1, 1, 5, 6, 99, 100, 101]);
})

test('it handles multiple valid opcode sequences before breaking', () => {
    expect(day_2(day_2_data)).toEqual([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
    expect(day_2([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
})