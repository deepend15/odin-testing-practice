import { calculator } from "./calculator.js";

test('Add 2 + 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('Add -63 + 586', () => {
    expect(calculator.add(-63, 586)).toBe(523);
})

test('Subtract 10 - 4', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
})

test('Subtract 64 - (-932)', () => {
    expect(calculator.subtract(64, -935)).toBe(999);
})

test('Multiply 5 * 4', () => {
    expect(calculator.multiply(5, 4)).toBe(20);
})

test('Multiply 35 * -77', () => {
    expect(calculator.multiply(35, -77)).toBe(-2695);
})

test('Divide 12 / 4', () => {
    expect(calculator.divide(12, 4)).toBe(3);
})

test('Divide 1716 / -33', () => {
    expect(calculator.divide(1716, -33)).toBe(-52);
})