// https://school.programmers.co.kr/learn/courses/30/lessons/132265/solution_groups?language=javascript 풀이 참고
// 형 해시 만들어서 형 토핑 종류 수와 동생 토핑 수 비교
function solution(topping) {
  var answer = 0;
  const left = {},
    right = new Set();
  let leftVariety = 0;

  topping.forEach((t) => {
    if (left[t]) {
      left[t]++;
    } else {
      left[t] = 1;
      leftVariety++;
    }
  });

  topping.forEach((t) => {
    right.add(t);
    left[t]--;

    if (!left[t]) leftVariety--;
    if (right.size === leftVariety) answer++;
  });

  return answer;
}
