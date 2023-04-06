function solution(lines) {
  var answer = 0;
  if (lines.length === 1) return 1;

  function timeToSec(time) {
    const [h, m, s] = time.split(":").map(parseFloat);
    return h * 3600 + m * 60 + s * 1;
  }

  const timeLogs = lines.map((line) => {
    const [date, endTime, time] = line.split(" ");
    const endSec = timeToSec(endTime);
    const sec = time.substr(0, time.length - 1) * 1;
    let startSec = (endSec - sec + 0.001).toFixed(3) * 1;
    return startSec < 0 ? [endSec, 0] : [endSec, startSec];
  });
  timeLogs.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < timeLogs.length; i++) {
    let cnt = 1;
    for (let j = i + 1; j < timeLogs.length; j++) {
      if (Math.round((timeLogs[i][0] + 0.999) * 1000) / 1000 >= timeLogs[j][1])
        cnt++;
    }
    answer = answer > cnt ? answer : cnt;
  }

  return answer;
}
