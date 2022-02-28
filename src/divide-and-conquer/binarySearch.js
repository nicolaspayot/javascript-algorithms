export function binarySearch(arr, item) {
    let minIndex = 0;
    let maxIndex = arr.length - 1;

    while (minIndex <= maxIndex) {
        const currentIndex = Math.floor((minIndex + maxIndex) / 2);

        if (arr[currentIndex] === item) {
            return currentIndex;
        } else if (arr[currentIndex] < item) {
            minIndex = currentIndex + 1;
        } else {
            maxIndex = currentIndex - 1;
        }
    }

    return -1;
}

export function recursiveBinarySearch(arr, item) {
    if (arr.length === 1) {
        return arr[0] === item ? true : false;
    }

    const currentIndex = Math.floor((0 + arr.length - 1) / 2);

    if (arr[currentIndex] === item) {
        return true;
    } else if (arr[currentIndex] < item) {
        return recursiveBinarySearch(arr.slice(currentIndex + 1), item);
    } else {
        return recursiveBinarySearch(arr.slice(0, currentIndex - 1), item);
    }
}
