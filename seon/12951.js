function solution(s) {
  let ans = s[0].toUpperCase();

  for (let i = 1; i < s.length; i++) {
    ans += s[i - 1] === " " ? s[i].toUpperCase() : s[i].toLowerCase();
  }

  return ans;
}
