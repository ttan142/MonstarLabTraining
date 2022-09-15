// Bài 2. Tìm phần tử khác nhau giữa 2 mảng.
// 	[input]: arr1 = [1, 2, 3, 4, 5];
// 			 arr2 = [2, 3, 6];

// 	Difference(arr1, arr2);
// 	[output]: [1, 4, 5];

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [2, 3, 6];

function Difference(arr1, arr2) {
  return arr1.reduce((prev, curr, i) => {
    if (arr2.indexOf(arr1[i]) === -1) {
      prev.push(curr);
    }
    return prev;
  }, []);
}

console.log(Difference(arr1, arr2));
