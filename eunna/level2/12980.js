function solution(n) {
  var ans = 0;

  // 5 - 4 2 1 - 0
  // 6 3 - 2 1 - 0
  // 5000 2500 1250 625 - 624 312 156 78 39 - 38 19 - 18 9 - 8 4 2 1 - 0
  // 2로 나누어떨어지지 않을 경우, 1을 뺄 때마다 ans를 1 더함.

  let tmp = n;
  while (tmp > 0) {
    if (tmp % 2 === 0) {
      tmp = tmp / 2;
    } else {
      tmp--;
      ans++;
    }
  }

  return ans;
}
