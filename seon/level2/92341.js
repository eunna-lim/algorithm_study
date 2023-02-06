function solution(fees, records) {
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const lastTime = 23 * 60 + 59;
  const carRecords = {};

  const calcFee = (time) => {
    if (time <= baseTime) return baseFee;
    return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
  };

  records.forEach((record) => {
    let [time, number, action] = record.split(" ");
    number = Number(number);
    const [hour, minute] = time.split(":").map(Number);

    if (!carRecords[number]) carRecords[number] = { time: 0, in: null };

    if (action === "IN") carRecords[number].in = hour * 60 + minute;
    else {
      carRecords[number].time += hour * 60 + minute - carRecords[number].in;
      carRecords[number].in = null;
    }
  });

  const numbers = Object.keys(carRecords).sort((a, b) => a - b);

  return numbers.map((number) => {
    if (carRecords[number].in !== null)
      carRecords[number].time += lastTime - carRecords[number].in;
    return calcFee(carRecords[number].time);
  });
}
