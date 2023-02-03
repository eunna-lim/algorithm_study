/*
// 장확성 : 16/ 30 (16.0)
// 효율성 : 2 / 10 (14.0)
// 합계 : 30.0/ 100.0
function solution(n, k, cmd) {
  var answer = "";
  let states = Array(n).fill(true);
  let current = k;
  let deleted = [];
  let cnt = 0;
  cmd.forEach((command) => {
    const [c, num] = command.split(" ");
    switch (c) {
      case "D":
        cnt = 0;
        while (cnt < parseInt(num)) {
          current++;
          if (states[current]) cnt++;
        }
        break;
      case "U":
        cnt = 0;
        while (cnt < parseInt(num)) {
          current--;
          if (states[current]) cnt++;
        }
        break;
      case "C":
        states[current] = false;
        deleted.push(current);
        current = current === n - 1 ? current - 1 : current + 1;
        break;
      case "Z":
        const index = deleted.pop();
        states[index] = true;
        break;
    }
  });

  states.forEach((isAlive) => (isAlive ? (answer += "O") : (answer += "X")));
  return answer;
}
*/

/*
// 정확성 : 30 / 30 (30.0)
// 효율성 전체 실패
// 합계 : 30.0/ 100.0
function solution(n, k, cmd) {
  var answer = "";
  let alive = Array.from({ length: n }, (_, index) => index);
  let deleted = [];
  let current = k;
  let cnt = 0;
  cmd.forEach((command) => {
    const [c, num] = command.split(" ");
    switch (c) {
      case "D":
        current += parseInt(num);
        break;
      case "U":
        current -= parseInt(num);
        break;
      case "C":
        const [delItem] = alive.splice(current, 1);
        deleted.push([delItem, current]);
        if (current > alive.length - 1) current = alive.length - 1;
        break;
      case "Z":
        const [item, index] = deleted.pop();
        alive = [...alive.slice(0, index), item, ...alive.slice(index)];
        if (index <= current) current += 1;
        break;
    }
  });
  for (let i = 0; i < n; i++) {
    answer += alive.indexOf(i) !== -1 ? "O" : "X";
  }
  return answer;
}
*/

/*
// 위와 같은 결과...
function solution(n, k, cmd) {
  let alive = Array.from({ length: n }, (_, index) => index);
  let deleted = [];
  let current = k;
  cmd.forEach((command) => {
    const [c, num] = command.split(" ");
    switch (c) {
      case "D":
        current += parseInt(num);
        break;
      case "U":
        current -= parseInt(num);
        break;
      case "C":
        const [delItem] = alive.splice(current, 1);
        deleted.push([delItem, current]);
        if (current > alive.length - 1) current = alive.length - 1;
        break;
      case "Z":
        const [item, index] = deleted.pop();
        alive.splice(index, 0, item);
        if (index <= current) current += 1;
        break;
    }
  });
  let result = Array(n).fill("X");
  alive.forEach((index) => (result[index] = "O"));
  return result.join("");
}
*/

/*
// 정확성 : 30 / 30 (30.0)
// 효율성 : 5 / 10 (35.0)
// 합계 : 65.0 / 100.0
// 효율성 6~10번 시간 초과
function solution(n, k, cmd) {
  var answer = "";
  let states = Array(n).fill(true);
  let current = k;
  let deleted = [];
  let cnt = 0;
  cmd.forEach((command) => {
    const [c, num] = command.split(" ");
    switch (c) {
      case "D":
        cnt = 0;
        while (cnt < parseInt(num)) {
          current++;
          if (states[current]) cnt++;
        }
        break;
      case "U":
        cnt = 0;
        while (cnt < parseInt(num)) {
          current--;
          if (states[current]) cnt++;
        }
        break;
      case "C":
        states[current] = false;
        deleted.push(current);

        let next = current + 1;
        let isFound = false;
        for (; next < n; next++) {
          if (states[next]) {
            isFound = true;
            break;
          }
        }

        if (!isFound) {
          next = current - 1;
          for (; next >= 0; next--) {
            if (states[next]) {
              isFound = true;
              break;
            }
          }
        }

        current = next;
        break;
      case "Z":
        const index = deleted.pop();
        states[index] = true;
        break;
    }
  });

  states.forEach((isAlive) => (isAlive ? (answer += "O") : (answer += "X")));
  return answer;
}
*/

/*
// double-linked list로 풀이
// 정확성 : 25 / 30 (25.0)
// 효율성 : 10 / 10 (70.0)
// 합계 : 95.0 / 100.0
class Node {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function solution(n, k, cmd) {
  var answer = "";
  const root = new Node(0);
  let tmp = root;
  let current;
  for (let i = 1; i < n; i++) {
    let node = new Node(i);
    node.prev = tmp;
    tmp.next = node;
    tmp = node;

    if (i === k) current = node;
  }
  let deleted = [];

  cmd.forEach((command) => {
    const [key, num] = command.split(" ");
    switch (key) {
      case "D":
        for (let i = 0; i < num; i++) {
          current = current.next;
        }
        break;
      case "U":
        for (let i = 0; i < num; i++) {
          current = current.prev;
        }
        break;
      case "C":
        deleted.push(current);
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        current = current.next ? current.next : current.prev;
        break;
      case "Z":
        let alive = deleted.pop();
        if (alive.prev) alive.prev.next = alive;
        if (alive.next) alive.next.prev = alive;
    }
  });

  tmp = root;
  for (let i = 0; i < n; i++) {
    if (tmp.val === i) {
      answer += "O";
      tmp = tmp.next;
    } else {
      answer += "X";
    }
  }

  return answer;
}
*/

class Node {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function solution(n, k, cmd) {
  var answer = "";
  const root = new Node(0);
  let tmp = root;
  let current;
  for (let i = 1; i < n; i++) {
    let node = new Node(i);
    node.prev = tmp;
    tmp.next = node;
    tmp = node;

    if (i === k) current = node;
  }
  let deleted = [];

  cmd.forEach((command) => {
    const [key, num] = command.split(" ");
    switch (key) {
      case "D":
        for (let i = 0; i < num; i++) {
          current = current.next;
        }
        break;
      case "U":
        for (let i = 0; i < num; i++) {
          current = current.prev;
        }
        break;
      case "C":
        deleted.push(current);
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        current = current.next ? current.next : current.prev;
        break;
      case "Z":
        let alive = deleted.pop();
        if (alive.prev) alive.prev.next = alive;
        if (alive.next) alive.next.prev = alive;
    }
  });

  let result = Array(n).fill("O");
  deleted.forEach((node) => {
    result[node.val] = "X";
  });
  answer = result.join("");

  return answer;
}
