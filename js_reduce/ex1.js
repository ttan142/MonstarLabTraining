// Bài 1. Chunk array.
// 	[input]: [1, 2, 3, 4, 5];

// 	Chunk(arr, 2);
// 	[output]: [[1, 2], [3, 4], [5]];

const arr = [1, 2, 3, 4, 5];

function chunk(arr, size) {
  return arr.reduce((total, currentValue, i) => {
    if (i % size === 0) {
      total.push(arr.slice(i, i + size));
    }
    return total;
  }, []);
}

console.log(chunk(arr, 2));
