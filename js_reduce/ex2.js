// Bài 2. Tìm phần tử khác nhau giữa 2 mảng.
// 	[input]: arr1 = [1, 2, 3, 4, 5];
// 			 arr2 = [2, 3, 6];

// 	Difference(arr1, arr2);
// 	[output]: [1, 4, 5];

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [2, 3, 6];

function Difference(a1, a2) {
  const result = [];
  a1.reduce((a, b, i) => {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }, 0);
  return result;
}

console.log(Difference(arr1, arr2));
