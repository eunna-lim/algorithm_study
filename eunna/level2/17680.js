function solution(cacheSize, cities) {
  var answer = 0;

  if (cacheSize === 0) return 5 * cities.length;

  let cache = [];

  for (let c of cities) {
    const city = c.toUpperCase();
    const index = cache.indexOf(city);

    if (index !== -1) {
      cache.splice(index, 1);
      cache.push(city);
      answer++;
    } else {
      if (cache.length === cacheSize) {
        cache.splice(0, 1);
      }
      cache.push(city);
      answer = answer + 5;
    }
  }

  return answer;
}
