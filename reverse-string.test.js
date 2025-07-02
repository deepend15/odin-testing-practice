import { reverseString } from "./reverse-string.js";

test('Reverse "word"', () => {
    expect(reverseString('word')).toBe("drow");
})

test('Reverse "string"', () => {
    expect(reverseString('string')).toBe("gnirts");
})

test('Reverse "wEiRd-WoRd"', () => {
    expect(reverseString('wEiRd-WoRd')).toBe("dRoW-dRiEw");
})