function solution(progresses, speeds) {
  const periods = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  const answer = [0];
  let number = periods[0];
  for (let i = 0, lastIndex = 0; i < periods.length; i++) {
    if (periods[i] <= number) answer[lastIndex] += 1;
    else {
      number = periods[i];
      answer[++lastIndex] = 1;
    }
  }

  return answer;
}
