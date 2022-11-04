function solution(s) {
  let [transCount, subCount] = [0, 0];
  let num = s;

  while (num !== "1") {
    let newNum = "";
    transCount += 1;

    for (let n of num) {
      if (n === "1") newNum += "1";
      else subCount += 1;
    }

    num = newNum.length.toString(2);
  }

  return [transCount, subCount];
}
