// Bài 4. Đếm số lượng giống nhau trong một array.
// 	[input]: [0, 1, 1, 2, 2, 2];
// 	[outpu]: { 0: 1, 1: 2, 2: 3 };

const arr = [0, 1, 1, 2, 2, 2];

function countFreq(arr) {
  return arr.reduce((prev, curr) => {
    if (!prev[curr]) {
      prev[curr] = 0;
    }
    prev[curr] += 1;
    return prev;
  }, {});
}

console.log(countFreq(arr));
