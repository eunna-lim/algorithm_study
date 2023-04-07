function solution(number, k) {
  const answer = [];

  for (let n of number) {
    while (k && answer[answer.length - 1] < n) {
      answer.pop();
      k -= 1;
    }

    answer.push(n);
  }

  return k ? answer.slice(0, answer.length - 1).join("") : answer.join("");
}
