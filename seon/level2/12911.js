function countOne(num) {
  let count = 0;
  for (let n of num) {
    if (n === "1") count += 1;
  }

  return count;
}

function solution(n) {
  const binaryN = n.toString(2);
  const numOne = countOne(binaryN);

  while (true) {
    n += 1;
    if (numOne === countOne(n.toString(2))) return n;
  }
}
