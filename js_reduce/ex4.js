// Bài 4. Đếm số lượng giống nhau trong một array.
// 	[input]: [0, 1, 1, 2, 2, 2];
// 	[outpu]: { 0: 1, 1: 2, 2: 3 };

const arr = [0, 1, 1, 2, 2, 2];

function countFreq(arr) {
  return arr.reduce((total, currentValue) => {
    total[currentValue] ? total[currentValue] : (total[currentValue] = 0);
    total[currentValue] += 1;
    return total;
  }, {});
}

console.log(countFreq(arr));
