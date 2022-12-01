// Bài 5. Get max() và min()
// 	[input]: [12, 45, 21, 65, 38, 76, 108, 43];
// 	[output]: Max(arr); // 108
// 			  Min(arr); // 12

const arr = [12, 45, 21, 65, 38, 76, 108, 43];

function max(arr) {
  return arr.reduce((a, b) => (a > b ? a : b));
}

function min(arr) {
  return arr.reduce((a, b) => (a < b ? a : b));
}

console.log(max(arr), min(arr));
