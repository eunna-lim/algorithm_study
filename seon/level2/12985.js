function solution(n, a, b) {
  let ans = 1;

  while (Math.ceil(a / 2) !== Math.ceil(b / 2)) {
    a = !(a % 2) ? a / 2 : Math.ceil(a / 2);
    b = !(b % 2) ? b / 2 : Math.ceil(b / 2);

    ans += 1;
  }

  return ans;
}

console.log(solution(8, 4, 7));
