/*
// 정확성 : 3 / 10 (30.0 / 100.0)
// 테스트케이스 1, 3, 4번만 통과
function solution(n, results) {
  var answer = 0;

  let conn = {};
  results.forEach(([winner, loser]) => {
    conn[winner] ? conn[winner].push(loser) : (conn[winner] = [loser]);
  });

  let count = Array(n + 1).fill(0);
  // 1->2->5, 2->5, 3->2->5, 4->3->2->5, 4->2->5
  for (let winner of Object.keys(conn)) {
    let stack = [winner];
    while (stack.length) {
      const player = stack.pop();
      count[player]++;
      if (conn[player]) {
        stack = [...stack, ...conn[player]];
      }
    }
  }

  answer = count.filter((val) => val == n).length;

  return answer;
}
*/

/*
// 정확성 : 4 / 10 (40.0 / 100.0)
// 테스트케이스 1~4 통과, 나머지는 시간 초과
// 효율성 높일 수 있는 방법 찾아야 함..
function solution(n, results) {
  var answer = 0;

  // 부모 개수 + 자식 개수 === n - 1 : 순위가 확실함.
  let certain = Array(n + 1).fill(0);

  let parentConn = {};
  let childConn = {};

  results.forEach(([winner, loser], idx) => {
    parentConn[loser]
      ? parentConn[loser].push(winner)
      : (parentConn[loser] = [winner]);
    childConn[winner]
      ? childConn[winner].push(loser)
      : (childConn[winner] = [loser]);
  });

  for (let now of Object.keys(parentConn)) {
    let stack = [...parentConn[now]];
    let lst = [];
    while (stack.length) {
      const player = stack.pop();
      lst.push(player);
      if (parentConn[player]) {
        stack = [...stack, ...parentConn[player]];
      }
    }
    certain[now] += new Set(lst).size;
  }

  for (let now of Object.keys(childConn)) {
    let stack = [...childConn[now]];
    let lst = [];
    while (stack.length) {
      const player = stack.pop();
      lst.push(player);
      if (childConn[player]) {
        stack = [...stack, ...childConn[player]];
      }
    }
    certain[now] += new Set(lst).size;
  }

  for (let i = 1; i <= n; i++) {
    if (certain[i] === n - 1) answer++;
  }

  return answer;
}
*/

function solution(n, results) {
  var answer = 0;
  // n[0] : n을 이긴 사람들, n[1] : n이 이긴 사람들
  const playerResults = Array.from({ length: n + 1 }, () => [[], []]);

  results.forEach(([winner, loser]) => {
    let [winnersWinner, winnersLoser] = playerResults[winner];
    let [losersWinner, losersLoser] = playerResults[loser];

    winnersWinner.forEach((player) => {
      playerResults[player][1] = Array.from(
        new Set([...playerResults[player][1], loser, ...losersLoser])
      );
    });
    playerResults[winner][1] = Array.from(
      new Set([...playerResults[winner][1], loser, ...losersLoser])
    );

    losersLoser.forEach((player) => {
      playerResults[player][0] = Array.from(
        new Set([...playerResults[player][0], winner, ...winnersWinner])
      );
    });
    playerResults[loser][0] = Array.from(
      new Set([...playerResults[loser][0], winner, ...winnersWinner])
    );
  });

  for (let i = 1; i <= n; i++) {
    if (playerResults[i][0].length + playerResults[i][1].length === n - 1)
      answer++;
  }

  return answer;
}
