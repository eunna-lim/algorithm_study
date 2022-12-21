function solution(s) {
  var answer = [];
  let arr = s
    .slice(1, s.length - 1)
    .split("},")
    .filter((v) => v !== "")
    .map((el) => {
      let modified = el
        .replaceAll("{", "")
        .replaceAll("}", "")
        .split(",")
        .map((val) => parseInt(val));
      return modified;
    });
  arr.sort((a, b) => a.length - b.length);
  arr.forEach((nums) => {
    nums.forEach((num) => {
      if (answer.indexOf(num) === -1) answer.push(num);
    });
  });
  return answer;
}
