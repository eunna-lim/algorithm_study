function solution(n, costs) {
  costs.sort(([, , costA], [, , costB]) => costA - costB);
  let check = new Array(n).fill(0);
  let group = 1;
  let answer = 0;

  for (const [start, end, cost] of costs) {
    if (check[start] === check[end] && check[start]) continue;

    if (!check[start] && !check[end]) {
      answer += cost;
      check[start] = check[end] = group++;
      continue;
    }

    if (check[start] || check[end]) {
      answer += cost;
      const curGroup = Math.max(check[start], check[end]);
      const prevGroup = Math.min(check[start], check[end]);

      if (!prevGroup) {
        check[start] = check[end] = curGroup;
        continue;
      }

      check = check.map((e) => (e === prevGroup ? curGroup : e));
    }
  }

  return answer;
}
