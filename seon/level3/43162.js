function dfs(node, visit, computers) {
  const stack = [node];

  while (stack.length > 0) {
    const curNode = stack.pop();
    if (visit[curNode]) continue;
    let nextNode = 0;
    const lastNode = computers[curNode].length - 1;

    visit[curNode] = true;
    while (nextNode <= lastNode) {
      if (computers[curNode][nextNode]) stack.push(nextNode);
      nextNode += 1;
    }
  }
}

function solution(n, computers) {
  const visit = [];
  visit.length = n;
  visit.fill(false);

  let answer = 0;
  for (let node = 0; node < visit.length; node++) {
    if (!visit[node]) {
      dfs(node, visit, computers);
      answer += 1;
    }
  }

  return answer;
}
