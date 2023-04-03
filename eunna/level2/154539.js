/*
// 정확성 : 21 / 23 (91.3 / 100.0)
// 테스트케이스 21, 23 시간초과
function solution(numbers) {
  var answer = [];
  const cache = {};
  for (let i = 0; i < numbers.length; i++) {
    if (cache[numbers[i]] && cache[numbers[i]][1] > i) {
      answer.push(cache[numbers[i]][0]);
      continue;
    }

    let bigger = 0;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] > numbers[i]) {
        bigger = numbers[j];
        cache[numbers[i]] = [bigger, j];
        break;
      }
    }
    answer.push(bigger ? bigger : -1);
  }

  return answer;
}
*/

// https://school.programmers.co.kr/questions/43789 참고
// 스택을 활용해서 풀자..!
function solution(numbers) {
  var answer = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }

    stack.push(i);
  }

  return answer;
}
