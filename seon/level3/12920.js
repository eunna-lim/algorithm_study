// 정확성 테스트 통과, 효율성 테스트 실패
// class Core {
//   constructor(coreTime, idx) {
//     this.coreTime = coreTime;
//     this.curTime = 0;
//     this.idx = idx;
//   }

//   setWork() {
//     this.curTime = this.coreTime - 1;
//   }

//   doWork() {
//     this.curTime -= 1;
//   }

//   get isWorking() {
//     return this.curTime > 0;
//   }

//   get index() {
//     return this.idx;
//   }
// }

// function solution(n, cores) {
//   const coreList = cores.map((core, idx) => new Core(core, idx + 1));

//   while (n > 0) {
//     for (const core of coreList) {
//       if (core.isWorking) {
//         core.doWork();
//         continue;
//       }

//       if (n === 1) return core.index;

//       core.setWork();
//       n -= 1;
//     }
//   }
// }

function solution(n, cores) {
  if (n < cores.length) return n;

  let [start, end] = [1, Math.max(...cores) * n];
  while (start < end - 1) {
    const mid = ((start + end) / 2) >> 0;
    const capacity = cores.reduce((result, core) => result + ((mid / core) >> 0) + 1, 0);

    if (capacity >= n) end = mid;
    else start = mid;
  }

  let rest = cores.length;
  cores.forEach((core) => {
    rest += (start / core) >> 0;
  });

  for (let i = 0; i < cores.length; i++) {
    if (end % cores[i] === 0) rest += 1;
    if (rest === n) return i + 1;
  }
}
