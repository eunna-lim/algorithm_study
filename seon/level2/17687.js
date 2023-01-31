function solution(n, t, m, p) {
  let count = 1;
  let number = 0;
  let answer = "";
  while (answer.length < t) {
    const nNumber = number.toString(n).toUpperCase();
    for (let i = 0; i < nNumber.length; i++) {
      if (count === p) answer += nNumber[i];
      if (answer.length === t) break;
      count += count === m ? 1 - m : 1;
    }
    number++;
  }

  return answer;
}
