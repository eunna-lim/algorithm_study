function solution(n, t, m, timetable) {
  const busTimes = [];
  const crewTimes = [];

  for (let i = 0; i < n; i++) busTimes.push(540 + t * i);

  timetable.sort().forEach((time) => {
    const [hour, minute] = time.split(":").map(Number);
    crewTimes.push(hour * 60 + minute);
  });

  let answer;
  busTimes.forEach((busTime) => {
    let passenger = [];
    while (passenger.length < m && crewTimes.length) {
      if (crewTimes[0] <= busTime) {
        passenger.push(crewTimes.shift());
      } else break;
    }

    if (passenger.length === m) answer = passenger[passenger.length - 1] - 1;
    else answer = busTime;
  });

  const hour = parseInt(answer / 60);
  const minute = answer % 60;
  return `${hour > 9 ? hour : "0" + String(hour)}:${
    minute > 9 ? minute : "0" + String(minute)
  }`;
}
