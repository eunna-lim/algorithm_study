/*
// 정확도 : 13 / 21 (61.9 / 100.0)
// https://school.programmers.co.kr/questions/31551 풀이 참고
// 테스트케이스 3, 4, 7, 8, 18, 19, 20, 21 시간초과...
function solution(s) {
  var answer = [];

  s.forEach((str) => {
    let rest = str;
    let append = "";
    while (true) {
      const idx = rest.indexOf("110");
      if (idx === -1) break;

      rest = rest.substr(0, idx).concat(rest.substr(idx + 3));
      append = append.concat("110");
    }

    let result = "";
    let foundZero = false;
    for (let i = rest.length - 1; i >= 0; i--) {
      if (rest[i] === "0") {
        result = rest
          .substr(0, i + 1)
          .concat(append)
          .concat(rest.substr(i + 1));
        foundZero = true;
        break;
      }
    }

    if (!foundZero) {
      result = append.concat(rest);
    }
    answer.push(result);
  });

  return answer;
}
*/

/*
// 수행 시간은 조금 줄었으나, 여전히 시간 초과 발생...(위와 동일한 테스트케이스..)
function solution(s) {
  var answer = [];

  s.forEach((str) => {
    let rest = str;
    let cnt = 0;
    let append = "";
    for (let i = 0; i < rest.length; i++) {
      if (append.length === 3) append = append.substr(1, 2);
      append += rest[i];

      if (append === "110") {
        rest = rest.substr(0, i - 2) + rest.substr(i + 1);
        cnt++;

        i = i - 5 < -1 ? -1 : i - 5;
        append = "";
      }
    }

    append = "110".repeat(cnt);

    let result = "";
    let foundZero = false;
    for (let i = rest.length - 1; i >= 0; i--) {
      if (rest[i] === "0") {
        result = rest.substr(0, i + 1) + append + rest.substr(i + 1);
        foundZero = true;
        break;
      }
    }

    if (!foundZero) {
      result = append.concat(rest);
    }
    answer.push(result);
  });

  return answer;
}
*/

/*
// 이것도 마찬가지...
function solution(s) {
  var answer = [];

  s.forEach((str) => {
    let rest = str;
    let cnt = 0;
    let append = "";
    for (let i = 0; i < rest.length; i++) {
      if (append.length === 3) append = append.substr(1, 2);
      append += rest[i];

      if (append === "110") {
        rest = rest.substr(0, i - 2) + rest.substr(i + 1);
        cnt++;

        i = i - 5 < -1 ? -1 : i - 5;
        append = "";
      }
    }

    append = "110".repeat(cnt);

    let result = "";

    const zeroIdx = rest.lastIndexOf("0");
    result =
      zeroIdx === -1
        ? append + rest
        : rest.substr(0, zeroIdx + 1) + append + rest.substr(zeroIdx + 1);

    answer.push(result);
  });

  return answer;
}
*/

// https://school.programmers.co.kr/questions/17959 풀이 참고
// 스택을 활용하여 바로 제거할 수 있도록 한다!!
// 마지막에 다 110들을 더할 때에는 맨 마지막 0 뒤에 위치시키도록 한디. 없으면 110들 + 나머지
function is110(arr) {
  return (
    arr[arr.length - 1] === "1" &&
    arr[arr.length - 2] === "1" &&
    arr[arr.length - 3] === "0"
  );
}

function solution(s) {
  var answer = [];

  answer = s.map((str) => {
    const arr = str.split("");
    let stack = [];
    let cnt = 0;

    while (arr.length) {
      stack.push(arr.pop());

      if (is110(stack)) {
        for (let i = 0; i < 3; i++) {
          stack.pop();
        }
        cnt++;
      }
    }

    str = stack.reverse().join("");
    const append = "110".repeat(cnt);

    const idx0 = str.lastIndexOf("0");
    if (idx0 === -1) str = append + str;
    else str = str.substr(0, idx0 + 1) + append + str.substr(idx0 + 1);

    return str;
  });

  return answer;
}
