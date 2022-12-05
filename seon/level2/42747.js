function solution(citations) {
  citations.sort((a, b) => a - b);
  const { length } = citations;

  let answer;
  let index = 0;
  for (let h = 0; h <= length; h++) {
    while (citations[index] < h) index++;

    const quotedNum = length - index;
    const unquotedNum = length - quotedNum;

    if (h <= quotedNum && h >= unquotedNum) answer = h;
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
