function solution(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);
  edges.forEach(([parent, child]) => {
    tree[parent].push(child);
  });

  function getAnimalNumbers(node, animalNumber, stack) {
    const newAnimalNumber = { ...animalNumber };

    if (info[node] === 0) newAnimalNumber.sheep += 1;
    else if (newAnimalNumber.wolf + 1 === newAnimalNumber.sheep) return [newAnimalNumber];
    else newAnimalNumber.wolf += 1;

    if (stack.length === 0) return [newAnimalNumber];

    const results = [];
    stack.forEach((subNode, idx, origin) => {
      const newStack = origin.filter((_, i) => i !== idx);
      const [leftNode, rightNode] = tree[subNode];
      if (leftNode) newStack.push(leftNode);
      if (rightNode) newStack.push(rightNode);
      results.push(...getAnimalNumbers(subNode, newAnimalNumber, newStack));
    });

    return results;
  }

  let answer = 0;
  const result = getAnimalNumbers(0, { sheep: 0, wolf: 0 }, tree[0]);
  result.forEach(({ sheep, wolf }) => {
    if (sheep > wolf) answer = Math.max(answer, sheep);
  });

  return answer;
}
