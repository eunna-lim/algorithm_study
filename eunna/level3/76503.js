/*
// dfs로 풀이 시도
// 자식 노드의 절댓값의 합을 계산하는 과정에 문제가 있음...
function solution(a, edges) {
  var answer = -1;
  const tree = Array.from({ length: a.length }, () => []);
  edges.forEach(([ver1, ver2]) => {
    tree[ver1].push(ver2);
    tree[ver2].push(ver1);
  });

  const visited = new Array(a.length).fill(false);
  function dfs(node) {
    if (visited[node]) return;
    visited[node] = true;

    let childWeight = 0;
    let absChildWeight = 0;
    tree[node].forEach((next) => {
      if (!visited[next]) {
        const w = a[next];

        childWeight += w;
        absChildWeight += Math.abs(w);
        const res = dfs(next);
        childWeight += res[0];
        absChildWeight += res[1];
      }
    });
    console.log(node, a[node], childWeight, absChildWeight);

    return [childWeight, absChildWeight];
  }

  const res = dfs(0);

  return answer;
}
*/

/*
// 정확성 : 14 / 18 (77.8 / 100.0)
// 테스트케이스 7, 8, 16, 17 런타임 에러로 실패
// 부모 노드에 자식 노드의 값을 더해주도록 변경
// https://school.programmers.co.kr/questions/17037 참고
function solution(a, edges) {
  var answer = 0;
  if (a.reduce((acc, val) => acc + val, 0) !== 0) return -1;

  const tree = Array.from({ length: a.length }, () => []);
  edges.forEach(([ver1, ver2]) => {
    tree[ver1].push(ver2);
    tree[ver2].push(ver1);
  });

  const visited = new Array(a.length).fill(false);

  function dfs(node) {
    if (visited[node]) return;
    visited[node] = true;

    tree[node].forEach((next) => {
      if (!visited[next]) {
        dfs(next);
        const w = a[next];

        a[node] += w;
        answer += Math.abs(w);
      }
    });
  }

  dfs(0);

  return answer;
}
*/

// 굥님 풀이 참고했습니다!
// [자식, 부모]로 스택에 넣을 생각을 못했었는데 덕분에 새로운 방법을 알았어유 감사해유!!
function solution(a, edges) {
  var answer = BigInt(0);
  if (a.reduce((acc, val) => acc + val, 0) !== 0) return -1;

  const tree = Array.from({ length: a.length }, () => []);
  edges.forEach(([ver1, ver2]) => {
    tree[ver1].push(ver2);
    tree[ver2].push(ver1);
  });

  const visited = new Array(a.length).fill(false);

  const stack = [[0, null]];

  while (stack.length) {
    const [child, parent] = stack[stack.length - 1];

    if (visited[child]) {
      answer += BigInt(a[child]) < 0 ? BigInt(a[child] * -1) : BigInt(a[child]);
      a[parent] += a[child];
      stack.pop();
      continue;
    }
    visited[child] = true;

    tree[child].forEach((node) => {
      if (!visited[node]) stack.push([node, child]);
    });
  }

  return answer;
}
