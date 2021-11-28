// (Level1)
// 나누어 떨어지는 숫자 배열
// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  answer.length < 1 && answer.push(-1);
  return answer;
}
