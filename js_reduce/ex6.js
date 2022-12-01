// Bài 6. Group by.
// 	[input]: arr = [
// 			    { area: "GZ", name: "YZW", age: 27 },
// 			    { area: "GZ", name: "TYJ", age: 25 },
// 			    { area: "SZ", name: "AAA", age: 23 },
// 			    { area: "FS", name: "BBB", age: 21 },
// 			    { area: "SZ", name: "CCC", age: 19 }
// 			];
// 	[output]: Group(arr, "area"); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }.

const arr = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 },
];

function groupBy(arr, property) {
  return arr.reduce((total, obj) => {
    const key = obj[property];
    total[key] ? total[key] : (total[key] = []);
    total[key].push(obj);
    return total;
  }, {});
}

console.log(groupBy(arr, "area"));
