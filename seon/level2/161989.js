function solution(n, m, section) {
  let index = 0;
  let answer = 0;

  while (index < section.length) {
    answer += 1;

    const limit = section[index] + m;
    while (true) {
      if (section[++index] >= limit || index >= section.length) break;
    }
  }

  return answer;
}
