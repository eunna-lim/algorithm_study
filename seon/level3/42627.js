function solution(jobs) {
  let curTime = 0;
  let totalTime = 0;
  const jobsLength = jobs.length;

  jobs.sort(([a, b], [c, d]) => a - c || b - d);

  const waitingJobs = [];
  while (jobs.length + waitingJobs.length) {
    while (jobs.length && jobs[0][0] <= curTime) {
      waitingJobs.push(jobs.shift());
    }

    if (waitingJobs.length) {
      waitingJobs.sort(([a, b], [c, d]) => b - d || a - c);
      const [startTime, leadTime] = waitingJobs.shift();
      curTime += leadTime;
      totalTime += curTime - startTime;
    } else {
      const [startTime, leadTime] = jobs.shift();
      curTime = startTime + leadTime;
      totalTime += curTime - startTime;
    }
  }

  return parseInt(totalTime / jobsLength);
}
