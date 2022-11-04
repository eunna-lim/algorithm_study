function solution(n) {
  if (n === 1) return 1;

  let ans = n % 2 ? 2 : 1;

  for (let i = 3; i <= parseInt(n / 2); i += 2) {
    if (!(n % i)) ans++;
  }

  return ans;
}
