function solution(a) {
  let answer = 0;

  const count = a.reduce((result, num) => {
    result[num] = result[num] + 1 || 1;
    return result;
  }, {});

  for (let [num, cnt] of Object.entries(count)) {
    if (answer >= cnt * 2) continue;

    num = Number(num);

    let temp = 0;
    let index = 0;
    while (index < a.length - 1) {
      if ((a[index] === num && a[index + 1] !== num) || (a[index] !== num && a[index + 1] === num)) {
        temp += 1;
        index += 2;
      } else index += 1;
    }
    answer = Math.max(answer, temp * 2);
  }

  return answer;
}
