import { caesarCipher } from "./caesar-cipher.js";

test('Caesar cipher "abc", 3', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
})

test('Caesar cipher "abc", 7', () => {
    expect(caesarCipher('abc', 7)).toBe('hij');
})

test('Caesar cipher "abc", 0', () => {
    expect(caesarCipher('abc', 0)).toBe('abc');
})

test('Caesar cipher "xyz", 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('Caesar cipher "def", -3', () => {
    expect(caesarCipher('def', -3)).toBe('abc');
})

test('Caesar cipher "abc", 29', () => {
    expect(caesarCipher('abc', 29)).toBe('def');
})

test('Caesar cipher "def", -29', () => {
    expect(caesarCipher('def', -29)).toBe('abc');
})

test('Caesar cipher "HeLLo", 3', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('Caesar cipher "Hello, World!", 3', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})