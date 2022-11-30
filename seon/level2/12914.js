// function calcCombination(n, r) {
//   if (n / 2 < r) r = n - r;

//   let numerator = BigInt(1);
//   let denominator = BigInt(1);

//   for (let i = 0; i < r; i++) numerator *= BigInt(n - i);
//   for (let i = 0; i < r; i++) denominator *= BigInt(r - i);

//   return Number(numerator / denominator);
// }

// function solution(num) {
//   let ans = 1;
//   let n = num - 1;
//   let r = 1;

//   while (n >= r) {
//     ans += calcCombination(n, r);
//     n -= 1;
//     r += 1;
//   }

//   return ans % 1234567;
// }

function solution(n) {
  let arr = [1n, 1n, 2n];
  for (let i = 3; i <= n; i++) arr.push(arr[i - 1] + arr[i - 2]);

  return arr[n] % 1234567n;
}
