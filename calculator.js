//기본 계산기
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide_new = (a, b) => a / b;
const get_Median = (a, b) => (a * b) / 2;
const get_Remainder = (a, b) => a % b;
const get_Abs = (num) => {
  if (num >= 0) {
    return num;
  }
  return -num;
};
