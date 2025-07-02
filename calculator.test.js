import { calculator } from "./calculator.js";

test('Add 2 + 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('Add -63 + 586', () => {
    expect(calculator.add(-63, 586)).toBe(523);
})

test('Add 4.5 + 5', () => {
    expect(calculator.add(4.5, 5)).toBeCloseTo(9.5);
})

test('Subtract 10 - 4', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
})

test('Subtract 64 - (-932)', () => {
    expect(calculator.subtract(64, -935)).toBe(999);
})

test('Subtract 10 - 1.5', () => {
    expect(calculator.subtract(10, 1.5)).toBeCloseTo(8.5);
})

test('Multiply 5 * 4', () => {
    expect(calculator.multiply(5, 4)).toBe(20);
})

test('Multiply 35 * -77', () => {
    expect(calculator.multiply(35, -77)).toBe(-2695);
})

test('Multiply 1.5 * 3', () => {
    expect(calculator.multiply(1.5, 3)).toBeCloseTo(4.5);
})

test('Divide 12 / 4', () => {
    expect(calculator.divide(12, 4)).toBe(3);
})

test('Divide 1716 / -33', () => {
    expect(calculator.divide(1716, -33)).toBe(-52);
})

test('Divide 4.5 / 3', () => {
    expect(calculator.divide(4.5, 3)).toBeCloseTo(1.5);
})