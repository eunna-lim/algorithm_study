function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);
  let h = citations[0];

  while (true) {
    const more = citations.filter((value) => value >= h).length;
    if (more >= h) break;
    else h--;
  }

  answer = h;
  return answer;
}
