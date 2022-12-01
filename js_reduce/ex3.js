// Bài 3. Uniq array. Loại bỏ phần tử bị lặp.
// 	[input]: [2, 1, 0, 3, 2, 1, 2];
// 	[output]: [2, 1, 0, 3];

const arr = [2, 1, 0, 3, 2, 1, 2];

function uniqueArray(arr) {
  return arr.reduce((total, currentValue) => {
    if (!total.includes(currentValue)) {
      total.push(currentValue);
    }
    return total;
  }, []);
}

console.log(uniqueArray(arr));
