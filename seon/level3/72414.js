function timeToSecond(time) {
  return time
    .split(":")
    .map(Number)
    .reduce((result, time, index) => result + time * 60 ** (2 - index), 0);
}

function parseTime(time) {
  return time > 9 ? time : "0" + String(time);
}

function secondToTime(second) {
  const hour = parseInt(second / 3600);
  second %= 3600;
  const minute = parseInt(second / 60);
  second %= 60;
  return `${parseTime(hour)}:${parseTime(minute)}:${parseTime(second)}`;
}

function solution(play_time, adv_time, logs) {
  const playSecond = timeToSecond(play_time);
  const advSecond = timeToSecond(adv_time);
  const playLog = Array(playSecond + 1).fill(0);

  logs.forEach((log) => {
    const [fromTime, toTime] = log.split("-");
    const fromSecond = timeToSecond(fromTime);
    const toSecond = timeToSecond(toTime);

    playLog[fromSecond] += 1;
    playLog[toSecond] -= 1;
  });

  for (let i = 1; i < playLog.length; i++) {
    playLog[i] += playLog[i - 1];
  }

  let currentSum = playLog.slice(0, advSecond).reduce((result, number) => result + number, 0);
  let max = currentSum;
  let maxSecond = 0;
  for (let second = 0; second < playLog.length - advSecond; second++) {
    currentSum += playLog[second + advSecond] - playLog[second];
    maxSecond = currentSum > max ? second + 1 : maxSecond;
    max = Math.max(max, currentSum);
  }

  return secondToTime(maxSecond);
}
