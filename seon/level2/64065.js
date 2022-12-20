function solution(s) {
  const groups = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );

  const check = {};
  const answer = [];
  for (const group of groups) {
    group.forEach((num) => {
      if (!check[num]) {
        check[num] = true;
        answer.push(num);
      }
    });
  }

  return answer;
}
