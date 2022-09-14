// Bài 1. Chunk array.
// 	[input]: [1, 2, 3, 4, 5];

// 	Chunk(arr, 2);
// 	[output]: [[1, 2], [3, 4], [5]];

const arr = [1, 2, 3, 4, 5];

function chunk(arr, size) {
  const result = [];
  arr.reduce((prev, curr, i) => {
    if (!(i % size)) myArr.push(arr.slice(i, i + size));
  }, 0);
  return result;
}

console.log(chunk(arr, 2));
