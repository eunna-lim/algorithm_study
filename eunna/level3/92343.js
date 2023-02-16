/*
// 정확성 : 7 / 18 (38.9 / 100.0)
function solution(info, edges) {
  var answer = 0;
  const conn = {};
  const saving = {};
  edges.forEach(([from, to]) => {
    conn[from] ? conn[from].push(to) : (conn[from] = [to]);
    saving[from] ? saving[from].push(to) : (saving[from] = [to]);
  });

  let sheep = 0,
    wolves = 0;
  const visited = [];
  let stack = [0];
  while (stack.length) {
    const node = stack.pop();
    if (visited.indexOf(node) === -1) {
      info[node] == 0 ? sheep++ : wolves++;
      if (sheep === wolves) {
        wolves--;
        if (info[visited[visited.length - 1]] === 1) {
          const [from, to] = visited.splice(visited.length - 2, 2);
          info[from] === 0 ? sheep-- : wolves--;
          info[to] === 0 ? sheep-- : wolves--;

          conn[from] = saving[from].filter((val) => val !== to);
          visited.forEach((val) => {
            conn[val] = saving[val];
          });
          stack.push(from);
        }
        continue;
      } else {
        visited.push(node);
      }
      answer = answer < sheep ? sheep : answer;

      if (conn[node] && conn[node].length) {
        stack = [...stack, ...conn[node]];
        conn[node] = [];
      }
    }
  }

  return answer;
}
*/

// https://velog.io/@tnehd1998/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%96%91%EA%B3%BC-%EB%8A%91%EB%8C%80-JavaScript
// 위 풀이 참고
// dfs를 함수로 구현할 수 있도록 할 것!
function solution(info, edges) {
  var answer = 0;
  const conn = Array.from({ length: info.length }, () => []);

  edges.forEach(([from, to]) => {
    conn[from].push(to);
  });

  function dfs(curNode, sheep, wolves, stack) {
    let s = sheep,
      w = wolves;
    const newStack = stack.slice();
    const curIndex = newStack.indexOf(curNode);

    if (info[curNode] === 0) s++;
    else w++;

    if (s === w) return;
    else answer = answer < s ? s : answer;

    newStack.splice(curIndex, 1);
    newStack.push(...conn[curNode]);

    newStack.forEach((node) => dfs(node, s, w, newStack));
  }

  dfs(0, 0, 0, [0]);

  return answer;
}
