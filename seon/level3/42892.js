function makeTree(nodes) {
  if (nodes.length === 1) return [nodes[0][0]];
  if (nodes.length === 0) return null;

  const [node, x, y] = nodes.shift();
  const left = [],
    right = [];
  nodes.forEach(([subNode, subX, subY]) => {
    if (subX < x) left.push([subNode, subX, subY]);
    else right.push([subNode, subX, subY]);
  });

  return [node, makeTree(left), makeTree(right)];
}

function preorder(tree) {
  const [node, left, right] = tree;

  const result = [node];
  if (left) result.push(...preorder(left));
  if (right) result.push(...preorder(right));

  return result;
}

function postorder(tree) {
  const [node, left, right] = tree;

  const result = [];
  if (left) result.push(...postorder(left));
  if (right) result.push(...postorder(right));
  result.push(node);

  return result;
}

function solution(nodeinfo) {
  const nodes = nodeinfo
    .map((node, idx) => [idx + 1, node[0], node[1]])
    .sort((a, b) => b[2] - a[2]);

  const tree = makeTree(nodes);

  return [preorder(tree), postorder(tree)];
}
