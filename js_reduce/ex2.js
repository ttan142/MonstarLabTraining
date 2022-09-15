// Bài 2. Tìm phần tử khác nhau giữa 2 mảng.
// 	[input]: arr1 = [1, 2, 3, 4, 5];
// 			 arr2 = [2, 3, 6];

// 	Difference(arr1, arr2);
// 	[output]: [1, 4, 5];

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [2, 3, 6];

function Difference(arr1, arr2) {
  return arr1.reduce((total, currentValue, i) => {
    if (arr2.indexOf(arr1[i]) === -1) {
      total.push(currentValue);
    }
    return total;
  }, []);
}

console.log(Difference(arr1, arr2));
