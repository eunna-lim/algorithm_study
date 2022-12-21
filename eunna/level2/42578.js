function getCombinations(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((val) => [val]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}

function solution(clothes) {
  var answer = 0;
  let types = [];
  let names = [];
  for (let each of clothes) {
    const [name, type] = each;
    const idx = types.indexOf(type);
    if (idx !== -1) {
      names[idx].push(name);
    } else {
      types.push(type);
      names.push([name]);
    }
  }

  if (types.length === 1) return names[0].length;

  // 조합으로 풀 시 테스트케이스 1번 틀림 (런타임 에러)
  /*
  const indexes = types.map((val, idx) => idx);
  for (let i = 1; i <= types.length; i++) {
    const combinations = getCombinations(indexes, i);
    combinations.forEach((combination) => {
      let tmp = 1;
      combination.forEach((val) => {
        tmp *= names[val].length;
      });
      answer += tmp;
    });
  }
  */

  answer = 1;
  for (let i = 0; i < types.length; i++) {
    // 각 경우의 수에 해당 종류의 옷을 입지 않는 경우를 더함
    // 예) yellow_hat, headgear, nothing
    answer *= names[i].length + 1;
  }
  // 아무것도 입지 않는 경우를 뺌.
  answer--;

  return answer;
}
