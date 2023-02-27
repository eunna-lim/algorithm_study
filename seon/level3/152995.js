function solution(scores) {
  const target = scores.shift();

  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  let standard = 0;
  let answer = 1;
  for (const score of scores) {
    if (target[0] < score[0] && target[1] < score[1]) return -1;

    if (standard <= score[1]) {
      if (target[0] + target[1] < score[0] + score[1]) answer += 1;
      standard = score[1];
    }
  }

  return answer;
}
