function solution(progresses, speeds) {
  var answer = [];
  let days = Array(progresses.length).fill(0);

  for (let i = 0; i < days.length; i++) {
    days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }

  let count = 0;
  let cache = days[0];

  days.forEach((day) => {
    if (day <= cache) {
      count++;
    } else {
      answer.push(count);
      cache = day;
      count = 1;
    }
  });

  answer.push(count);

  return answer;
}
