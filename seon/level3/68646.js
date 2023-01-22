function solution(a) {
  if (a.length <= 2) return a.length;

  const minFromLeft = new Array(a.length);
  minFromLeft[0] = a[0];
  for (let i = 1; i < a.length; i++) {
    minFromLeft[i] = Math.min(minFromLeft[i - 1], a[i]);
  }

  const minFromRight = new Array(a.length);
  minFromRight[minFromRight.length - 1] = a[a.length - 1];
  for (let i = a.length - 2; i >= 0; i--) {
    minFromRight[i] = Math.min(minFromRight[i + 1], a[i]);
  }

  const answer = [];

  for (let i = 1; i < a.length - 1; i++) {
    const leftMin = minFromLeft[i - 1];
    const rightMin = minFromRight[i + 1];
    if (a[i] > leftMin && a[i] > rightMin) continue;
    else answer.push(a[i]);
  }

  return answer.length + 2;
}
