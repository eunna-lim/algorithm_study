function solution(fees, records) {
  var answer = [];
  const [basicTime, basicFee, standardTime, standardFee] = fees;
  let recordsByCar = {};
  let cars = [];

  function timeToMin(time) {
    const [hour, min] = time.split(":");
    return parseInt(min) + 60 * parseInt(hour);
  }

  records.forEach((record) => {
    const [time, car, act] = record.split(" ");
    const toMin = timeToMin(time);

    switch (act) {
      case "IN":
        if (recordsByCar[car]) {
          recordsByCar[car][1] = toMin;
        } else {
          recordsByCar[car] = [0, toMin];
          cars.push(car);
        }
        break;
      case "OUT":
        recordsByCar[car][0] += toMin - recordsByCar[car][1];
        recordsByCar[car][1] = -1;
        break;
    }
  });

  cars.sort((a, b) => parseInt(a) - parseInt(b));

  for (let car of cars) {
    let [remainMin, inTime] = recordsByCar[car];
    if (inTime !== -1) remainMin += 23 * 60 + 59 - inTime;

    const fee =
      remainMin <= basicTime
        ? basicFee
        : basicFee +
          Math.ceil((remainMin - basicTime) / standardTime) * standardFee;
    answer.push(fee);
  }

  return answer;
}
