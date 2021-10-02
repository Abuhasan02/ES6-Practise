// function calculate(num){
//     return num * 2;
// }
// const calculate = function myFunc(num){
//     return num * 2;
// }
const calculate = num  => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
  const add = x + y;
  const diff = x - y;
  const result = add * diff;
  return result;
};
const total = add(10, 200);
const result = give5();
const result1 = doMath(50,30);

console.log(total);
console.log(result);
console.log(result1);