/*
// 정확성 : 9 / 11 (81.8 / 100,0)
// 테스트케이스 10, 11번 틀림
function solution(numbers) {
  var answer = [];
  numbers.forEach((num) => {
    let compare = num + 1;
    while (true) {
      const xor = num ^ compare;
      if ((xor.toString(2).match(/1/g) || []).length <= 2) {
        answer.push(compare);
        break;
      }
      compare++;
    }
  });
  return answer;
}
*/

// https://school.programmers.co.kr/questions/37104 풀이 참고
// 홀수일 때 조건을 생각하기가 어려웠다...
// 가장 작은 자리수에 위치한 0을 기점으로 0 -> 1로, 그 아래 자리의 1 -> 0으로 바꾸는 전략
function solution(numbers) {
  var answer = [];
  numbers.forEach((num) => {
    if (num % 2 === 0) answer.push(num + 1);
    else {
      let binary = num.toString(2);
      const pos =
        binary.lastIndexOf("0") === -1
          ? binary.length
          : binary.length - binary.lastIndexOf("0") - 1;
      const fnum = num + Math.pow(2, pos) - Math.pow(2, pos - 1);
      answer.push(fnum);
    }
  });

  return answer;
}
