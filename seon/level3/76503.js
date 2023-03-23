// tc 7,8,16,17 런타임에러. 재귀 호출 때문인듯
// const sum = (arr) => arr.reduce((result, num) => result + num, 0);
// const getChildNodes = (tree, parent, child) => tree[child].filter((node) => node !== parent);
// const abs = (n) => (n < 0n ? -n : n);

// function solution(a, edges) {
//   if (sum(a) !== 0) return -1;

//   const tree = Array.from({ length: a.length }, () => []);
//   edges.forEach(([edgeA, edgeB]) => {
//     tree[edgeA].push(edgeB);
//     tree[edgeB].push(edgeA);
//   });

//   function getNodeWeight(parentNode, childNodes) {
//     if (childNodes.length === 0) return { weight: BigInt(a[parentNode]), count: BigInt(0) };

//     let [weight, count] = [BigInt(0), BigInt(0)];
//     childNodes.forEach((childNode) => {
//       const { weight: childWeight, count: childCount } = getNodeWeight(childNode, getChildNodes(tree, parentNode, childNode));
//       weight += childWeight;
//       count += abs(childWeight) + childCount;
//     });

//     return { weight: BigInt(a[parentNode]) + weight, count };
//   }

//   return getNodeWeight(0, tree[0]).count;
// }

const sum = (arr) => arr.reduce((result, num) => result + num, 0);
const abs = (n) => (n < 0n ? -n : n);

function solution(a, edges) {
  if (sum(a) !== 0) return -1;

  const tree = Array.from({ length: a.length }, () => []);
  edges.forEach(([edgeA, edgeB]) => {
    tree[edgeA].push(edgeB);
    tree[edgeB].push(edgeA);
  });

  const visit = Array(a.length).fill(false);
  const stack = [[0, null]];
  let answer = BigInt(0);
  while (stack.length) {
    const [child, parent] = stack.pop();

    if (visit[child]) {
      answer += abs(BigInt(a[child]));
      a[parent] += a[child];
      continue;
    }

    visit[child] = true;
    stack.push([child, parent]);

    for (const subChild of tree[child]) {
      if (!visit[subChild]) stack.push([subChild, child]);
    }
  }

  return answer;
}
