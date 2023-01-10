function solution(k, tangerine) {
  var answer = 0;
  let sizeTable = {};
  tangerine.forEach((size) => {
    sizeTable[size] ? sizeTable[size]++ : (sizeTable[size] = 1);
  });

  let values = Object.values(sizeTable);
  values.sort((a, b) => b - a);

  let count = 0;
  for (let i = 0; i < values.length; i++) {
    count += values[i];

    if (count >= k) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}
