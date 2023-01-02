function solution(priorities, location) {
  let answer = 0;
  while (true) {
    const document = priorities.shift();
    if (document < Math.max(...priorities)) priorities.push(document);
    else {
      answer += 1;
      if (location === 0) return answer;
    }
    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}
