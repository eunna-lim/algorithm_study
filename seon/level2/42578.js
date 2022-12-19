function solution(c) {
  const clothes = {};
  c.forEach(([_, clothType]) => {
    clothes[clothType] = clothes[clothType] ? clothes[clothType] + 1 : 2;
  });

  return Object.values(clothes).reduce((prev, cur) => prev * cur, 1) - 1;
}
