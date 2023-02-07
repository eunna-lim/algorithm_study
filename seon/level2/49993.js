function solution(skill, skillTrees) {
  const alphabets = {};
  for (let i = 0; i < 26; i++) {
    alphabets[String.fromCharCode("A".charCodeAt() + i)] = 0;
  }

  for (let i = 0; i < skill.length; i++) {
    alphabets[skill[i]] = i + 1;
  }

  let answer = 0;
  for (const skillTree of skillTrees) {
    let isRight = true;
    let index = 1;
    for (const alphabet of skillTree.split("")) {
      if (alphabets[alphabet] === 0) continue;
      else if (alphabets[alphabet] !== index++) {
        isRight = false;
        break;
      }
    }
    if (isRight) answer += 1;
  }

  return answer;
}
