function solution(elements) {
  const numbers = new Set(elements);
  numbers.add(elements.reduce((acc, cur) => cur + acc, 0));

  for (let i = 1; i < elements.length; i++) {
    const newElements = [...elements, ...elements.slice(0, i)];
    for (let x = 0; x < elements.length; x++) {
      let number = 0;
      for (let y = x; y <= x + i; y++) {
        number += newElements[y];
      }
      numbers.add(number);
    }
  }

  return numbers.size;
}
