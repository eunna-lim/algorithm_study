function solution(s) {
  let ans = "";

  const numbers = s.split(" ").map(Number);

  ans += Math.min(...numbers);
  ans += " " + Math.max(...numbers);

  return ans;
}
