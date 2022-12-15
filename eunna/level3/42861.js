/*
// 정확성 2 / 8 (25.0 / 100.0)
function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);

  let visited = [costs[0][0], costs[0][1]];
  answer = costs[0][2];
  for (let i = 1; i < costs.length; i++) {
    const [ver1, ver2, cost] = costs[i];
    if (visited.indexOf(ver1) > -1 && visited.indexOf(ver2) === -1) {
      visited.push(ver2);
      answer += cost;
    } else if (visited.indexOf(ver2) > -1 && visited.indexOf(ver1) === -1) {
      visited.push(ver1);
      answer += cost;
    }

    if (visited.length === n) break;
  }

  return answer;
}
*/

// kruskal 알고리즘으로 풀이 (최소 비용 신장 트리, Union-Find 알고리즘 공부 필요)
// 부모 노드를 병합하는 과정에 대한 이해 필요
function getParent(parents, x) {
  if (parents[x] === x) return x;
  else return getParent(parents, parents[x]);
}

function unionParent(parents, x, y) {
  const xParent = getParent(parents, x);
  const yParent = getParent(parents, y);

  let modifiedParent = parents.slice();
  if (xParent < yParent) {
    modifiedParent = modifiedParent.map((p) => {
      if (p === yParent) return xParent;
      else return p;
    });
  } else {
    modifiedParent = modifiedParent.map((p) => {
      if (p === xParent) return yParent;
      else return p;
    });
  }

  return modifiedParent;
}

function isParentSame(parents, x, y) {
  const xParent = getParent(parents, x);
  const yParent = getParent(parents, y);
  return xParent === yParent;
}

function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);

  let parents = Array.from(Array(n).keys());

  for (let val of costs) {
    const [ver1, ver2, cost] = val;

    // 부모가 같으면 추가하지 않고, 같지 않으면 추가
    if (!isParentSame(parents, ver1, ver2)) {
      answer += cost;
      parents = unionParent(parents, ver1, ver2);
    }
  }
  return answer;
}

// console.log(solution(7, [[2, 3, 7], [3, 6, 13], [3, 5, 23], [5, 6, 25], [0, 1, 29], [1, 5, 34], [1, 2, 35], [4, 5, 53], [0, 4, 75]])) //159
// console.log(solution(5, [[0, 1, 5], [1, 2, 3], [2, 3, 3], [3, 1, 2], [3, 0, 4], [2, 4, 6], [4, 0, 7]])) //15
// console.log(solution(5, [[0, 1, 1], [3, 4, 1], [1, 2, 2], [2, 3, 4]])) //8
// console.log(solution(4, [[0, 1, 5], [1, 2, 3], [2, 3, 3], [1, 3, 2], [0, 3, 4]])) //9
// console.log(solution(5, [[0, 1, 1], [3, 1, 1], [0, 2, 2], [0, 3, 2], [0, 4, 100]])) //104
// console.log(solution(6, [[0, 1, 5], [0, 3, 2], [0, 4, 3], [1, 4, 1], [3, 4, 10], [1, 2, 2], [2, 5, 3], [4, 5, 4]])) //11
// console.log(solution(5, [[0, 1, 1], [2, 3, 1], [3, 4, 2], [1, 2, 2], [0, 4, 100]])) //6
// console.log(solution(5, [[0, 1, 1], [0, 4, 5], [2, 4, 1], [2, 3, 1], [3, 4, 1]])) //8
// console.log(solution(5, [[0, 1, 1], [0, 2, 2], [0, 3, 3], [0, 4, 4], [1, 3, 1]])) //8
// console.log(solution(5, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 3], [2, 3, 8], [3, 4, 1]])) //7
// console.log(solution(5, [[0, 1, 1], [3, 4, 1], [1, 2, 2], [2, 3, 4]])) //8
// console.log(solution(4, [[0,1,1],[0,2,2],[2,3,1]])) //4
