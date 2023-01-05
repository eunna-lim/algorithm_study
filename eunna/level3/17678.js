/*
// 정확성 : 22 / 24 (테스트케이스 5, 18 틀림)
// 합계 : 91.7 / 100.0
function solution(n, t, m, timetable) {
  var answer = "";

  function timeCalc(timeArr, minutes) {
    let newTime = timeArr.slice();
    newTime[1] += minutes;
    if (newTime[1] > 60) {
      newTime[0] += parseInt(newTime[1] / 60);
      newTime[1] = newTime[1] % 60;
    }
    return newTime;
  }

  function timeToStr(timeArr) {
    return (timeArr[0] < 10 ? "0" : "")
      .concat(timeArr[0])
      .concat(":")
      .concat(timeArr[1] < 10 ? "0" : "")
      .concat(timeArr[1]);
  }

  function strToTime(str) {
    return str.split(":").map((str) => parseInt(str));
  }

  let lastTime = [9, 0];
  lastTime = timeCalc(lastTime, (n - 1) * t);

  const lastTimeStr = timeToStr(lastTime);

  timetable.sort((a, b) => {
    const aArr = strToTime(a);
    const bArr = strToTime(b);

    if (aArr[0] < bArr[0]) return -1;
    else if (aArr[0] === bArr[0] && aArr[1] <= bArr[1]) return -1;
    else return 1;
  });

  let queue = timetable.slice();
  let departTime = [9, 0];
  let rideCrews = [];
  let cnt = 0;

  while (cnt < n * m && queue.length) {
    const timeArr = strToTime(queue[0]);
    if (
      timeArr[0] > lastTime[0] ||
      (timeArr[0] === lastTime[0] && timeArr[1] > lastTime[1])
    )
      break;

    if (
      timeArr[0] > departTime[0] ||
      (timeArr[0] === departTime[0] && timeArr[1] > departTime[1])
    ) {
      departTime = timeCalc(departTime, t);
      rideCrews = [];
      continue;
    }

    const crew = queue.shift();
    if (rideCrews.length < m) {
      rideCrews.push(crew);
    } else {
      rideCrews = [crew];
      departTime = timeCalc(departTime, t);
    }

    cnt++;
  }

  if (rideCrews.length < m) answer = timeToStr(lastTime);
  else {
    let time = strToTime(rideCrews[rideCrews.length - 1]);
    if (time[1] == 0) {
      time[0]--;
      time[1] += 60;
    }
    time[1]--;
    answer = timeToStr(time);
  }

  return answer;
}
*/

/*
// 정확성 : 21 / 24 (테스트케이스 5, 15, 16 틀림)
// 합계 : 87.5 / 100.0

function solution(n, t, m, timetable) {
  var answer = "";

  function timeCalc(timeArr, minutes) {
    let newTime = timeArr.slice();
    newTime[1] += minutes;
    if (newTime[1] > 60) {
      newTime[0] += parseInt(newTime[1] / 60);
      newTime[1] = newTime[1] % 60;
    }
    return newTime;
  }

  function timeToStr(timeArr) {
    return (timeArr[0] < 10 ? "0" : "")
      .concat(timeArr[0])
      .concat(":")
      .concat(timeArr[1] < 10 ? "0" : "")
      .concat(timeArr[1]);
  }

  function strToTime(str) {
    return str.split(":").map((str) => parseInt(str));
  }

  let lastTime = [9, 0];
  lastTime = timeCalc(lastTime, (n - 1) * t);

  timetable.sort((a, b) => {
    const aArr = strToTime(a);
    const bArr = strToTime(b);

    if (aArr[0] < bArr[0]) return -1;
    else if (aArr[0] === bArr[0] && aArr[1] <= bArr[1]) return -1;
    else return 1;
  });

  let queue = timetable.slice();
  let departTime = [9, 0];
  let rideCrews = [];
  let cnt = 0;

  while (cnt < n * m && queue.length) {
    const timeArr = strToTime(queue[0]);
    if (
      timeArr[0] > lastTime[0] ||
      (timeArr[0] === lastTime[0] && timeArr[1] > lastTime[1])
    )
      break;

    if (
      timeArr[0] > departTime[0] ||
      (timeArr[0] === departTime[0] && timeArr[1] > departTime[1])
    ) {
      departTime = timeCalc(departTime, t);
      rideCrews = [];
      continue;
    }

    const crew = queue.shift();
    if (rideCrews.length < m) {
      rideCrews.push(crew);
    } else {
      rideCrews = [crew];
      departTime = timeCalc(departTime, t);
    }

    cnt++;
  }

  const lastTimeStr = timeToStr(lastTime);
  if (rideCrews.length < m) answer = lastTimeStr;
  else {
    if (cnt < n * m && rideCrews[rideCrews.length - 1] < lastTimeStr)
      answer = lastTimeStr;
    else {
      let time = strToTime(rideCrews[rideCrews.length - 1]);
      if (time[1] == 0) {
        time[0]--;
        time[1] += 60;
      }
      time[1]--;
      answer = timeToStr(time);
    }
  }

  return answer;
}
*/

/*
// 정확도 : 23 / 24 (테스트케이스 5번 틀림)
// 합계 : 95.8 / 100.0
function solution(n, t, m, timetable) {
  var answer = "";

  function timeCalc(timeArr, minutes) {
    let newTime = timeArr.slice();
    newTime[1] += minutes;
    if (newTime[1] >= 60) {
      newTime[0] += parseInt(newTime[1] / 60);
      newTime[1] = newTime[1] % 60;
    }
    return newTime;
  }

  function timeToStr(timeArr) {
    return (timeArr[0] < 10 ? "0" : "")
      .concat(timeArr[0])
      .concat(":")
      .concat(timeArr[1] < 10 ? "0" : "")
      .concat(timeArr[1]);
  }

  function strToTime(str) {
    return str.split(":").map((str) => parseInt(str));
  }

  let lastTime = [9, 0];
  lastTime = timeCalc(lastTime, (n - 1) * t);

  timetable.sort((a, b) => {
    const aArr = strToTime(a);
    const bArr = strToTime(b);

    if (aArr[0] < bArr[0]) return -1;
    else if (aArr[0] === bArr[0] && aArr[1] <= bArr[1]) return -1;
    else return 1;
  });

  let queue = timetable.slice();
  let departTime = [9, 0];
  let rideCrews = [];
  let cnt = 0;

  while (cnt < n * m && queue.length) {
    const timeArr = strToTime(queue[0]);
    if (
      timeArr[0] > lastTime[0] ||
      (timeArr[0] === lastTime[0] && timeArr[1] > lastTime[1])
    )
      break;

    if (
      timeArr[0] > departTime[0] ||
      (timeArr[0] === departTime[0] && timeArr[1] > departTime[1])
    ) {
      departTime = timeCalc(departTime, t);
      rideCrews = [];
      continue;
    }

    const crew = queue.shift();
    if (rideCrews.length < m) {
      rideCrews.push(crew);
    } else {
      rideCrews = [crew];
      departTime = timeCalc(departTime, t);
    }

    cnt++;
  }

  const lastTimeStr = timeToStr(lastTime);
  if (rideCrews.length < m) answer = lastTimeStr;
  else {
    if (cnt < n * m && timeToStr(departTime) < lastTimeStr)
      answer = lastTimeStr;
    else {
      let time = strToTime(rideCrews[rideCrews.length - 1]);
      if (time[1] == 0) {
        time[0]--;
        time[1] += 60;
      }
      time[1]--;
      answer = timeToStr(time);
    }
  }

  return answer;
}
*/

function solution(n, t, m, timetable) {
  var answer = "";

  function toStr(minutes) {
    const hour = (minutes / 60 < 10 ? "0" : "").concat(
      parseInt(minutes / 60).toString()
    );
    const minute = (minutes % 60 < 10 ? "0" : "").concat(
      parseInt(minutes % 60).toString()
    );
    return hour.concat(":").concat(minute);
  }

  const lastTime = 9 * 60 + (n - 1) * t;
  const timetableMin = timetable.map((tStr) => {
    const tArr = tStr.split(":").map((str) => parseInt(str));
    return tArr[0] * 60 + tArr[1];
  });

  timetableMin.sort((a, b) => a - b);
  let departTime = 9 * 60;
  let cnt = 1;
  let rideCrews = [];

  while (cnt <= n && timetableMin.length) {
    if (timetableMin[0] > lastTime) break;

    if (timetableMin[0] > departTime) {
      departTime += t;
      rideCrews = [];
      cnt++;
      continue;
    } else {
      let crew = timetableMin.shift();

      if (rideCrews.length === m) {
        if (cnt === n) break;

        departTime += t;
        rideCrews = [crew];
        cnt++;
        continue;
      } else {
        rideCrews.push(crew);
      }
    }
  }

  if (rideCrews.length < m || cnt < n) return toStr(lastTime);
  else return toStr(rideCrews[rideCrews.length - 1] - 1);

  return answer;
}
