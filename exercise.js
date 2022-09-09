// Bài 1.
// 	Viết code, một dòng cho mỗi yêu cầu sau:

// 	Tạo một đối tượng User trống.
// 	Thêm thuộc tính name với giá trị Hoang.
// 	Thêm thuộc tính surname với giá trị Viet.
// 	Thay đổi giá trị của name thành Bui.
// 	Xóa thuộc tính name khỏi đối tượng.

const User = {};
User.name = "Hoang";
User.surname = "Viet";
User.name = "Bui";
delete User.name;
console.log(User);

// Bài 2.
// 	let salaries = {
// 	  Bui: 1200,
// 	  Viet: 1600,
// 	  Hoang: 1350
// 	}

// 	Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng.

let salaries = {
  Bui: 1200,
  Viet: 1600,
  Hoang: 1350,
};
let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// Bài 3.
// 	[Input]:
// 	let menu = {
// 	  width: 200,
// 	  height: 300,
// 	  name: "Bui Viet Hoang"
// 	};

// 	Tạo function multiplyNumeric(obj) nhân tất cả các thuộc tính số của object menu với 2.

// 	[Output]:
// 	menu = {
// 	  width: 400,
// 	  height: 600,
// 	  name: "Bui Viet Hoang"
// 	};

let menu = {
  width: "200",
  height: 300,
  name: "Bui Viet Hoang",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (isNaN(Number(obj[key])) == false) {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

// Bài 4.
// 	Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
// 	Thêm “Rock-n-Roll” vào cuối.
// 	Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
// 	Tách giá trị đầu tiên của mảng và hiển thị nó.
// 	Thêm trước Rap và Reggae vào mảng.

// 	[Output]:
// 	Jazz, Blues
// 	Jazz, Blues, Rock-n-Roll
// 	Jazz, Classics, Rock-n-Roll
// 	Classics, Rock-n-Roll
// 	Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

//   Bài 5.
//   Viết hàm camelize(str) để thay đổi các từ được phân tách bằng dấu gạch ngang như “my-short-string” thành “myShortString” được viết bằng camel.

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//    Bài 6.
//    Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b. Nghiệm là: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
  return arr.filter((item, i) => {
    val = item;
    if (val < a || val > b) {
      return false;
    }
    return true;
  });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(filterRangeInPlace(arr, 5, 10));

//   Bài 7.
//   let initArray = [
//       { name: "Bui", age: 25 },
//       { name: "Viet", age: 26 },
//       { name: "Hoang", age: 27 },
//       { name: "Bui2" },
//       { age: 20 },
//       { name: "Hoang2", age: 18 }
//   ];

//   Viết code chuyển đổi sang 1 mảng chỉ chứa name.

let initArray = [
  { name: "Bui", age: 25 },
  { name: "Viet", age: 26 },
  { name: "Hoang", age: 27 },
  { name: "Bui2" },
  { age: 20 },
  { name: "Hoang2", age: 18 },
];
let names = initArray.map((item) => item.name).filter(Boolean);

console.log(names);

// Bài 8.
// 	Cùng là mảng initArray ở bài 7.
// 	Viết function getAverageAge(arr) trả về tuổi trung bình.

function getAverageAge(users) {
  let avgAge = users.map((item) => item.age).filter(Boolean);
  return avgAge.reduce((a, b) => a + b, 0) / avgAge.length;
}
console.log(getAverageAge(initArray));

//   Bài 9.
//   let flattened = [[1, 2], [3, 4], [5, 6]];
//   Viết function trả về mảng đã được làm phẳng.

//   [Output]: [1, 2, 3, 4, 5, 6]

let flattened = [1, [1, 2], [3, 4], [5, 6]];
function flatArray(array) {
  return array.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? flatArray(b) : b);
  }, []);
}

console.log(flatArray(flattened));

// Bài 10.
// Xây dựng chương trình có một ô input, một button. Sau khi nhập giá trị số vào ô input, click vào button thì in các số từ 1 tới giá trị của ô input ra màn hình. Nếu không nhập vào ô input, click button sẽ in số 1 + "Vui lòng nhập giá trị số vào ô input".
function myFunction() {
  const x = document.getElementById("numb").value;
  let text;
  if (isNaN(x)) {
    text = "Input không hợp lệ";
  } else if (x == null || x == "") {
    text = "1 Vui lòng nhập giá trị số vào ô input";
  } else if (x > 0) {
    for (var i = 1; i <= x; i++) {
      document.write(i + " ");
    }
  } else {
    for (var i = 1; x <= i; i--) {
      document.write(i + " ");
    }
  }

  document.getElementById("output").innerHTML = text;
}
