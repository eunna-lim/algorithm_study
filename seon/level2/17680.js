function solution(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  if (!cacheSize) return cities.length * MISS;

  let answer = 0,
    cache = [];

  cities.forEach((city) => {
    const index = cache.findIndex(
      (cachedCity) => cachedCity.toLowerCase() === city.toLowerCase()
    );

    if (index === -1) {
      if (cache.length === cacheSize) cache.shift();
      answer += MISS;
    } else {
      cache = [...cache.slice(0, index), ...cache.slice(index + 1)];
      answer += HIT;
    }
    cache.push(city);
  });

  return answer;
}
