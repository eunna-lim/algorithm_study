function solution(routes) {
  let ans = 1;

  routes.sort(([, b], [, d]) => b - d);
  let last = routes[0][1];

  for (let route of routes) {
    const [start, end] = route;
    if (start <= last) continue;
    else {
      ans += 1;
      last = end;
    }
  }

  return ans;
}
