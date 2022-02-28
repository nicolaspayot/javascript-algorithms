import { describe, expect, test } from 'vitest';
import { binarySearch, recursiveBinarySearch } from '../src/divide-and-conquer/binarySearch';

describe('divideAndConquer', () => {
    test('binarySearch should return item index when it exists', () => {
        expect(binarySearch([2, 5, 6, 7, 19, 31, 35, 50, 51, 56, 60, 62, 68, 72, 77, 81, 85, 90, 91, 99], 90)).toBe(17);
    });

    test('binarySearch should return -1 when item does not exist', () => {
        expect(binarySearch([8, 10, 16, 20, 24, 33, 36, 37, 39, 41, 49, 51, 54, 61, 64, 65, 75, 80, 86, 90], 52)).toBe(
            -1,
        );
    });

    test('Recursive binarySearch should return true when item exists', () => {
        expect(
            recursiveBinarySearch([2, 5, 6, 7, 19, 31, 35, 50, 51, 56, 60, 62, 68, 72, 77, 81, 85, 90, 91, 99], 90),
        ).toBe(true);
    });

    test('Recursive binarySearch should return false when item does not exist', () => {
        expect(
            recursiveBinarySearch([8, 10, 16, 20, 24, 33, 36, 37, 39, 41, 49, 51, 54, 61, 64, 65, 75, 80, 86, 90], 52),
        ).toBe(false);
    });
});
