function solution(n) {
  var answer = "";
  // 11 -> 42, 12 -> 44, 13 -> 111, 14 -> 112, 15 -> 114, 16 -> 121, 17 -> 122, 18 -> 124, 19 -> 141, ...
  while (n > 0) {
    const remainder = n % 3;

    switch (remainder) {
      case 1:
        n -= 1;
        answer += "1";
        break;
      case 2:
        n -= 2;
        answer += "2";
        break;
      case 0:
        n -= 3;
        answer += "4";
        break;
    }
    n /= 3;
  }
  answer = answer.split("").reverse().join("");
  return answer;
}
