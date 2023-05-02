/*
// 정확성 : 9 / 20 (45.0 / 100.0)
function solution(word, pages) {
  var answer = 0;
  word = word.toUpperCase();
  const points = {};

  pages.forEach((page, idx) => {
    const url = page
      .split("<head")[1]
      .split("</head>")[0]
      .split("<meta")
      .filter((tag) => tag.indexOf("og:url") > -1)[0]
      .split("content=")[1]
      .slice(9, -4);

    const body = page
      .split("<body")[1]
      .substr(1)
      .replace("</body>", "")
      .replace("</html>", "")
      .replaceAll("\n", " ");
    const point = {};

    point.idx = idx;
    point.basicPoint = body.split(" ").filter((chunk) => {
      const idx = chunk.toUpperCase().indexOf(word);
      if (idx === -1) return false;

      const reg = /[a-zA-Z]/g;
      const start = idx - 1,
        end = idx + word.length;
      if (start >= 0 && reg.test(chunk[start]))
        return false;
      else if (end < chunk.length && reg.test(chunk[end]))
        return false;
      return true;
    }).length;
    point.outlink = body
      .split("</a>")
      .filter((str) => str.indexOf("<a") > -1)
      .map((str) => str.split("<a href=")[1].split(">")[0].slice(9, -1));
    point.outlinkNum = point.outlink.length;
    point.linkPoint = 0;

    points[url] = point;
  });

  for (let url of Object.keys(points)) {
    points[url].outlink.forEach((link) => {
      if (points[link])
        points[link].linkPoint +=
          points[url].basicPoint / points[url].outlinkNum;
    });
  }

  let maxIdx = -1,
    maxPoint = -1;
  Object.entries(points).forEach(([key, values]) => {
    const totalPoint = values.basicPoint + values.linkPoint;
    if (maxPoint < totalPoint) {
      maxPoint = totalPoint;
      maxIdx = values.idx;
    }
  });

  return maxIdx;
}
*/

/*
// 정확성 : 11 / 20 (55.0 / 100.0)
function solution(word, pages) {
  var answer = 0;
  word = word.toUpperCase();
  const bodies = [];
  const points = {};

  pages.forEach((page, idx) => {
    const url = page
      .split("<head")[1]
      .split("</head>")[0]
      .split("<meta")
      .filter((tag) => tag.indexOf("og:url") > -1)[0]
      .split("content=")[1]
      .slice(9, -4);

    const body = page
      .split("<body")[1]
      .substr(1)
      .replace("</body>", "")
      .replace("</html>", "")
      .replaceAll("\n", " ");
    const point = {};

    point.idx = idx;

    let basicPoint = 0;
    const bodyChunks = body.split(" ");
    bodyChunks.forEach((chunk) => {
      for (let i = 0; i < chunk.length; i++) {
        const reg = /[a-zA-Z]/g;
        const start = i - 1,
          end = i + word.length;
        if (chunk.slice(i, i + word.length).toUpperCase() === word) {
          if (start >= 0 && reg.test(chunk[start]) && chunk[start] !== " ")
            continue;
          else if (
            end < chunk.length &&
            reg.test(chunk[end]) &&
            chunk[end] !== " "
          )
            continue;
          basicPoint++;
        }

        i = end;
      }
    });
    point.basicPoint = basicPoint;

    point.outlink = body
      .split("</a>")
      .filter((str) => str.indexOf("<a") > -1)
      .map((str) => str.split("<a href=")[1].split(">")[0].slice(9, -1));
    point.outlinkNum = point.outlink.length;
    point.linkPoint = 0;

    points[url] = point;
    bodies.push(body);
  });

  for (let url of Object.keys(points)) {
    points[url].outlink.forEach((link) => {
      if (points[link])
        points[link].linkPoint +=
          points[url].basicPoint / points[url].outlinkNum;
    });
  }

  let maxIdx = -1,
    maxPoint = -1;
  Object.entries(points).forEach(([key, values]) => {
    const totalPoint = values.basicPoint + values.linkPoint;
    if (maxPoint < totalPoint) {
      maxPoint = totalPoint;
      maxIdx = values.idx;
    }
  });

  return maxIdx;
}
*/
