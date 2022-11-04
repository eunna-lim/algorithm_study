function solution(n) {
  let ans = n % 2 ? 1 : 0;

  for (let i = 1; i <= parseInt(n / 2); i += 2) {
    if (!(n % i)) ans++;
  }

  return ans;
}
