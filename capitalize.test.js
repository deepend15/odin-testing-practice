import { capitalize } from "./capitalize.js";

test('Capitalize "word"', () => {
    expect(capitalize('word')).toBe("Word");
})

test('Capitalize "string"', () => {
    expect(capitalize('string')).toBe("String");
})

test('Capitalize "wEiRd-WoRd"', () => {
    expect(capitalize('wEiRd-WoRd')).toBe("WEiRd-WoRd");
})