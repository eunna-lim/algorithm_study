/*
// 정확성 : 11 / 20 (55.0 / 100.0)
// 테스트케이스 12~20 시간 초과
function solution(sequence) {
  var answer = 0;
  const startPlus = [],
    startMinus = [];
  let i = 1;
  sequence.forEach((num) => {
    startPlus.push(num * i);
    i *= -1;
    startMinus.push(num * i);
  });

  for (let i = 1; i <= startPlus.length; i++) {
    let sum = startPlus.slice(0, i).reduce((acc, num) => acc + num, 0);
    answer = answer > sum ? answer : sum;
    for (let j = i; j < startPlus.length; j++) {
      sum += startPlus[j];
      sum -= startPlus[j - i];
      answer = answer > sum ? answer : sum;
    }
  }

  for (let i = 1; i <= startMinus.length; i++) {
    let sum = startMinus.slice(0, i).reduce((acc, num) => acc + num, 0);
    answer = answer > sum ? answer : sum;
    for (let j = i; j < startMinus.length; j++) {
      sum += startMinus[j];
      sum -= startMinus[j - i];
      answer = answer > sum ? answer : sum;
    }
  }

  return answer;
}
*/

// https://school.programmers.co.kr/questions/46673 참고
// (-1을 곱한 것부터 시작한 누적합 결과) = (-1) * (1을 곱한 것부터 시작한 누적합 결과)
// 따라서 누적합이 가장 큰 값(최댓값)에서 가장 작은 값(최솟값)을 빼주면 됨...
function solution(sequence) {
  var answer = 0;
  const len = sequence.length;

  const subsum = new Array(len + 1).fill(0);

  for (let i = 0; i < len; i++) {
    subsum[i + 1] = subsum[i] + sequence[i] * (-1) ** i;
  }
  subsum.sort((a, b) => a - b);
  answer = subsum[len] - subsum[0];

  return answer;
}
