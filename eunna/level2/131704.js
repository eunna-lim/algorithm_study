// https://school.programmers.co.kr/questions/44242 풀이 참고
// 모든 숫자를 넣는 과정에서 stack의 맨 위와 order[idx]를 비교하여 stack을 비워줌

function solution(order) {
  var answer = 0;
  let idx = 0;
  const stack = [];

  for (let num = 1; num <= order.length; num++) {
    stack.push(num);

    while (stack.length && stack.at(-1) === order[idx]) {
      stack.pop();
      answer++;
      idx++;
    }
  }

  return answer;
}
