/*
// 정확성 전체 통과
// 효율성에서 실패
function solution(s) {
  var answer = 1;

  if (s.length <= 2) return answer;
  let stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    let length = 1;
    while (length <= stack.length) {
      const right = s.substr(i + 1, length);
      const left = [...stack].reverse().slice(0, length).join("");

      if (left === right) {
        answer = answer < left.length * 2 + 1 ? left.length * 2 + 1 : answer;
      }
      length++;
    }

    length = 1;
    while (length <= stack.length) {
      const right = s.substr(i, length);
      const left = [...stack].reverse().slice(0, length).join("");

      if (left === right) {
        answer = answer < left.length * 2 ? left.length * 2 : answer;
      }
      length++;
    }

    stack.push(s[i]);
  }

  return answer;
}
*/

function solution(s) {
  var answer = 1;

  if (s.length === 1) return answer;
  let comp = s[0];

  for (let i = 1; i < s.length; i++) {
    let length = comp.length < s.length - i ? comp.length : s.length - i;
    while (length > 0) {
      const right = s.substr(i + 1, length);
      const left = comp.substr(-length);

      let isSame = true;
      for (let i = 0; i < length; i++) {
        if (right[i] !== left[length - i - 1]) {
          isSame = false;
          break;
        }
      }

      if (isSame) {
        answer = answer < length * 2 + 1 ? length * 2 + 1 : answer;
        break;
      }
      length--;
    }

    length = comp.length < s.length - i ? comp.length : s.length - i;
    while (length > 0) {
      const right = s.substr(i, length);
      const left = comp.substr(-length);

      let isSame = true;
      for (let i = 0; i < length; i++) {
        if (right[i] !== left[length - i - 1]) {
          isSame = false;
          break;
        }
      }

      if (isSame) {
        answer = answer < length * 2 ? length * 2 : answer;
        break;
      }
      length--;
    }

    comp = comp.concat(s[i]);
  }

  return answer;
}
