// 정확성 통과, 효율성 통과x
// function solution(gems) {
//   const GEMS_LEN = gems.length;
//   const GEMS_TYPE = [...new Set(gems)];
//   const GEMS_TYPE_LEN = GEMS_TYPE.length;
//   const gemsTypeCheck = { [gems[0]]: 1 };

//   let [start, end] = [0, GEMS_LEN - 1];
//   let [findStart, findEnd] = [0, 0];

//   while (findStart < GEMS_LEN && findEnd < GEMS_LEN) {
//     if (Object.keys(gemsTypeCheck).length < GEMS_TYPE_LEN) {
//       findEnd++;
//       if (findEnd === GEMS_LEN) break;
//       gemsTypeCheck[gems[findEnd]] = gemsTypeCheck[gems[findEnd]]
//         ? gemsTypeCheck[gems[findEnd]] + 1
//         : 1;
//     } else {
//       if (findEnd - findStart < end - start)
//         [start, end] = [findStart, findEnd];
//       if (gemsTypeCheck[gems[findStart]] === 1)
//         delete gemsTypeCheck[gems[findStart]];
//       else gemsTypeCheck[gems[findStart]] -= 1;
//       findStart += 1;
//     }
//   }

//   return [start + 1, end + 1];
// }

function solution(gems) {
  const GEMS_SIZE = new Set(gems).size;
  const gemsMap = new Map();
  let [start, end] = [1, gems.length];

  gems.forEach((gem, i) => {
    gemsMap.delete(gem);
    gemsMap.set(gem, i);
    if (gemsMap.size === GEMS_SIZE) {
      const [findStart, findEnd] = [gemsMap.values().next().value + 1, i + 1];
      [start, end] =
        end - start > findEnd - findStart ? [findStart, findEnd] : [start, end];
    }
  });
  return [start, end];
}
