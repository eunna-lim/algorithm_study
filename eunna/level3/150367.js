// https://school.programmers.co.kr/questions/42319 풀이 참고
// dfs로 풀이하는 과정 이해할 것
function solution(numbers) {
  var answer = [];
  numbers.forEach((num) => {
    let tree = num.toString(2);
    const depth = Math.log2(tree.length + 1);
    if (parseInt(depth) < depth)
      tree =
        "0".repeat(Math.pow(2, parseInt(depth) + 1) - tree.length - 1) + tree;

    let flag = true;
    const stack = [tree];
    while (stack.length) {
      const subtree = stack.pop();
      if (subtree.length >= 3) {
        const mid = parseInt(subtree.length / 2);
        const left = subtree.substr(0, mid),
          right = subtree.substr(mid + 1);
        const childMid = parseInt(left.length / 2);
        if (
          subtree[mid] === "0" &&
          (left[childMid] === "1" || right[childMid] === "1")
        ) {
          flag = false;
          break;
        }
        stack.push(left, right);
      }
    }
    flag ? answer.push(1) : answer.push(0);
  });
  return answer;
}
