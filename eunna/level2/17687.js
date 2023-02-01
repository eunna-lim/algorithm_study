function solution(n, t, m, p) {
  var answer = "";
  let str = "";
  let cnt = 0;
  while (str.length <= t * m) {
    str += cnt.toString(n);
    cnt++;
  }

  for (let i = 0; i < t; i++) {
    answer += str[i * m + p - 1].toUpperCase();
  }

  return answer;
}
