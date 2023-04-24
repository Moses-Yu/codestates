console.log("hello world".toUpperCase())
// HELLO WORLD

console.log('hello '.concat('world'));
// hello world

console.log('hell' + 'o');
// hello

console.log(1 + 'hello');
// 1hello

console.log('hello' + 1 + 15);
// hello115

console.log('hello' + (1 + 15));
// hello16

// 대표적인 falsy 값
/*
false
0
-0
0n
""
''
``
null
undefined
NaN
*/


// 구구단 3단을 출력하는 코드가 작성되어 있습니다.
// 이 코드를 구구단 4단을 출력하는 코드로 변경해 보세요.

// 구구단 3단
// console.log(3 * 1);
// console.log(3 * 2);
// console.log(3 * 3);
// console.log(3 * 4);
// console.log(3 * 5);
// console.log(3 * 6);
// console.log(3 * 7);
// console.log(3 * 8);
// console.log(3 * 9);

// 구구단
dan = 4;
for (let i = 1; i < 10; i++) {
  console.log(`${dan} * ${i} = `, dan * i);
}