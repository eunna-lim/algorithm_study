function solution(n) {
  var answer = 0;
  let cases = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    let tmp = (cases[i - 1] + cases[i - 2]) % 1234567;
    cases.push(tmp);
  }
  answer = cases[n];

  return answer;
}
