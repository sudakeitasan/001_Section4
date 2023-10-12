/**
 * 変数宣言
 */
var val1 = "var変数";
val1 = "var変数上書き";
console.log(val1);

var val1 = "var変数再宣言";
console.log(val1);

let val2 = "let変数";
val2 = "let変数上書き";
console.log(val2);

const val3 = "const変数";
//val3 = "const変数上書き";
console.log(val3);

const val4 = {
  name: "すだ",
  age: 38,
};
val4.name = "suda";
val4.address = "nagano";
console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "suda";
val5.push("tiger")
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "須田";
const message = `私の名前は${name}です。`;
console.log(message);

/**
 * アロー関数
 */
const func = (str) => {
  return str;
}
console.log(func("こんにちは"));

const func2 = (num1, num2) => num1 + num2;
console.log(func2(10, 20));

/**
 * 分割代入
 */
const myProfile2 = {
  name2: "須田",
  age2: 38,
};
const {name2 , age2} = myProfile2;
console.log(`名前は${name2}。年齢は${age2}。`);

const myProfile3 = ["suda", 48];
const [name3 , age3] = myProfile3;
console.log(`名前は${name3}。年齢は${age3}。`);

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
sayHello();
sayHello("須田");

/**
 * スプレッド構文
 */
const arr1 = [1, 2];
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4, ...arr5];
console.log(arr6);

const arr7 = arr4;
arr7[0] = 999;
console.log(arr4);

const arr8 = [...arr5];
arr8[0] = 999;
console.log(arr8);
console.log(arr5);

/**
 * map,filter
 */
const nameArr = ["須田", "松本", "早川"];
const nameArr2 = nameArr.map((name, index) => {
  return `名前は${name}。${index + 1}番目。`;
});
console.log(nameArr2);

const numArr = [1, 2, 3, 4, 5];
const numArr2 = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(numArr2);

/**
 * 三項演算子
 */
const aaa = 1 === 1 ? "trueです" : "falseです";
console.log(aaa);
