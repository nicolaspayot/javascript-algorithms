// Quadratic complexity: O(n^2)
export function isUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                return false;
            }
        }
    }
    return true;
}

// Linear complexity: O(n)
export function isUniq2(arr) {
    const cache = { [arr[0]]: true };

    for (let i = 1; i < arr.length; i++) {
        if (cache[arr[i]]) {
            return false;
        } else {
            cache[arr[i]] = true;
        }
    }
    return true;
}

// Linear complexity: O(n)
export function uniqSort(arr) {
    const cache = { [arr[0]]: true };
    const results = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            results.push(arr[i]);
            cache[arr[i]] = true;
        }
    }

    return results.sort((a, b) => a - b);
}
