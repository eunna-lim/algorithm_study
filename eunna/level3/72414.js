function solution(play_time, adv_time, logs) {
  var answer = "";
  if (play_time === adv_time) return "00:00:00";

  const playSec = timeToSecond(play_time);
  const advSec = timeToSecond(adv_time);

  const views = new Array(playSec + 1).fill(0);
  logs.forEach((time) => {
    const [s, e] = time.split("-").map((t) => timeToSecond(t));
    views[s]++;
    views[e]--;
  });

  for (let i = 1; i <= playSec; i++) {
    views[i] += views[i - 1];
  }

  let start = 0;
  let viewers = 0;
  for (let i = 0; i <= advSec; i++) {
    viewers += views[i];
  }

  let tmp = viewers;
  for (let tmpS = 0; tmpS <= playSec - advSec; tmpS++) {
    tmp += views[tmpS + advSec] - views[tmpS];

    if (tmp > viewers) {
      start = tmpS + 1;
      viewers = tmp;
    }
  }

  answer = secondToTime(start);

  return answer;
}

function timeToSecond(time) {
  const [h, m, s] = time.split(":").map((val) => parseInt(val));
  return h * 3600 + m * 60 + s;
}

function secondToTime(sec) {
  const s = sec % 60;
  const m = parseInt((sec % 3600) / 60);
  const h = parseInt(sec / 3600);

  const make2Digits = (num) => (num < 10 ? `0${num}` : `${num}`);

  return [h, m, s].map((val) => make2Digits(val)).join(":");
}
