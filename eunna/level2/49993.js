function solution(skill, skill_trees) {
  var answer = 0;
  let idxInSkill;
  let flag = true;
  skill_trees.forEach((skl) => {
    const nowSkill = skl.split("");
    flag = true;
    idxInSkill = 0;
    for (let i = 0; i < nowSkill.length; i++) {
      const inSkill = skill.indexOf(nowSkill[i]);
      if (inSkill !== -1) {
        if (inSkill > idxInSkill) {
          flag = false;
          break;
        } else {
          idxInSkill++;
        }
      }
    }
    if (flag) answer++;
  });
  return answer;
}
