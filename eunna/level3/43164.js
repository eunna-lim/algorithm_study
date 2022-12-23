/*
// 정확성 테스트 1번 틀림 (75 / 100)
function solution(tickets) {
  var answer = [];
  let connection = {};

  tickets.forEach((ticket) => {
    const [from, to] = ticket;
    connection[from] = connection[from]
      ? [...connection[from], to].sort()
      : [to];
  });

  let possible = [];

  for (let start of connection["ICN"]) {
    let route = ["ICN"];
    let stack = [start];
    let tmpConnection = JSON.parse(JSON.stringify(connection));
    tmpConnection["ICN"] = tmpConnection["ICN"].filter(
      (dest) => dest !== start
    );

    let used = [];
    while (stack.length > 0) {
      const from = stack.pop();
      used.push([route[route.length - 1], from]);
      route.push(from);

      if (tmpConnection[from]) {
        if (tmpConnection[from].length > 0 || route.length === tickets.length) {
          const to = tmpConnection[from];
          to.reverse();
          stack = [...stack, ...to];
          tmpConnection[from] = [];
        }
      } else {
        break;
      }
    }
    if (route.length === tickets.length + 1) possible.push(route);
  }
  possible.sort();
  answer = possible[0];

  return answer;
}
*/

/*
// 민경이 풀이 보고 이해
function solution(tickets) {
    var answer = [];
    let connection = {};
    
    tickets.forEach(([from, to]) => {
        connection[from] = connection[from] ? [...connection[from], to].sort().reverse() : [to];
    })
    
    
    let route = ["ICN"];
    
    while (true) {
        let from = route[route.length - 1];
        
        if (connection[from] && connection[from].length > 0) {
            const to = connection[from].pop();
            route.push(to);
        } else {
            while (true) {
                // 경로 되돌리기
                // 그 이전에 방문했던 곳으로 이동해서 방문할 수 있는 장소에 추가함.
                const beforeFrom = route[route.length - 2];
                connection[beforeFrom] = [from, ...connection[beforeFrom]];
                route.pop();
                
                // 방문할 수 있는 다른 경로가 있을 때까지 반복
                if (connection[beforeFrom].length > 1) break;
                else from = route[route.length - 1];
            }
        }
        
        if (route.length === tickets.length + 1) break;
    }
    
    answer = route;
    
    return answer;
}
*/

// 재귀함수로 풀이
function solution(tickets) {
  var answer = [];
  let isUsed = new Array(tickets.length).fill(false);
  let possible = [];

  function dfs(from, route, tickets) {
    route.push(from);

    if (route.length === tickets.length + 1) {
      possible.push(route);
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i][0] === from && !isUsed[i]) {
        // 해당 티켓을 사용함.
        isUsed[i] = true;
        dfs(tickets[i][1], route.slice(), tickets);
        // 다른 경로를 탐색하기 위함.
        isUsed[i] = false;
      }
    }
  }

  dfs("ICN", [], tickets);
  possible.sort();
  answer = possible[0];

  return answer;
}
