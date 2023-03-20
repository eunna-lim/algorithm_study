/*
// 정확성 : 2 / 31 (6.5 / 100.0)
// 예시는 모두 통과했으나 테스트케이스에서 시간 초과 발생
// 테스트케이스 5, 7번만 통과했음 -> 5초 대에 성공..
function solution(n, m, x, y, r, c, k) {
  const start = [x, y];
  const move = { d: [1, 0], l: [0, -1], r: [0, 1], u: [-1, 0] };
  const routes = [];

  function possible(pos) {
    return pos[0] > 0 && pos[0] <= n && pos[1] > 0 && pos[1] <= m;
  }

  // [x, y, 거리, 경로]
  const queue = [[...start, 0, ""]];
  while (queue.length) {
    const [x, y, dist, route] = queue.shift();

    if (`${x}${y}` === `${r}${c}` && dist === k) {
      return route;
    } else if (dist > k) break;

    for (d of Object.keys(move)) {
      const [mx, my] = move[d];
      const nextPos = [x + mx, y + my];
      if (possible(nextPos)) {
        queue.push([...nextPos, dist + 1, route + d]);
      }
    }
  }

  return "impossible";
}
*/

// https://github.com/Juniork725/coding_test/blob/main/%EB%82%9C%EC%9D%B4%EB%8F%843/%EB%AF%B8%EB%A1%9C%20%ED%83%88%EC%B6%9C%20%EB%AA%85%EB%A0%B9%EC%96%B4.md 참고

function solution(n, m, x, y, r, c, k) {
  var answer = "";

  function abs(num) {
    return num < 0 ? num * -1 : num;
  }
  let rest = k - (abs(x - r) + abs(y - c));
  if (rest < 0 || rest % 2 !== 0) return "impossible";

  // 사전순으로 d < l < r < u

  // 갈 수 있는 가장 아랫쪽으로 이동 -> 가장 왼쪽으로 이동 -> 가장 오른쪽으로 이동(r까지) -> 가장 윗쪽으로 이동(c까지)
  // (x, y) -> (n, y) -> (n, 1) -> (r, 1) -> (r, c) 이동

  const direction = { d: 0, l: 0, r: 0, u: 0 };

  x > r ? (direction["u"] += x - r) : (direction["d"] += r - x);
  y > c ? (direction["l"] += y - c) : (direction["r"] += c - y);

  answer += "d".repeat(direction["d"]);
  const d = Math.min(parseInt(k / 2), n - (x + direction["d"]));
  answer += "d".repeat(d);
  direction["u"] += d;
  rest -= 2 * d;

  answer += "l".repeat(direction["l"]);
  const l = Math.min(parseInt(rest / 2), y - direction["l"] - 1);
  answer += "l".repeat(l);
  direction["r"] += l;
  rest -= 2 * l;

  answer += "rl".repeat(parseInt(rest / 2));
  answer += "r".repeat(direction["r"]);
  answer += "u".repeat(direction["u"]);

  return answer;
}
