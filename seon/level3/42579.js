function solution(genres, plays) {
  const answer = [];
  const songs = {};

  genres.forEach((genre, idx) => {
    if (songs[genre]) {
      songs[genre].sum += plays[idx];
      songs[genre].plays.push([plays[idx], idx]);
    } else {
      songs[genre] = { sum: plays[idx], plays: [[plays[idx], idx]] };
    }
  });

  const sortedSongs = Object.values(songs).sort(
    (prev, next) => next.sum - prev.sum
  );

  sortedSongs.forEach(({ plays }) => {
    if (plays.length === 1) answer.push(plays[0][1]);
    else {
      plays.sort(([a, b], [c, d]) => c - a || b - d);
      answer.push(plays[0][1], plays[1][1]);
    }
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
