function solution(n, money) {
  var answer = 0;

  // dp[1] : 1, dp[2] : 2, dp[3] : 2, dp[4] : 3, dp[5] : 4, dp[6] : 5
  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < money.length; i++) {
    for (let j = money[i]; j <= n; j++) {
      dp[j] += dp[j - money[i]];
    }
  }
  answer = dp[n] % 1000000007;

  return answer;
}
