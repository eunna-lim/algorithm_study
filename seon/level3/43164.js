function solution(tickets) {
  const ticketsMap = {};
  tickets.sort().forEach(([from, to]) => {
    if (ticketsMap[from]) ticketsMap[from].push(to);
    else ticketsMap[from] = [to];
  });

  const answer = ["ICN"];
  while (answer.length <= tickets.length) {
    let from = answer[answer.length - 1];

    if (ticketsMap[from] && ticketsMap[from].length) {
      const to = ticketsMap[from].shift();
      answer.push(to);
    } else {
      let flag = true;
      while (flag) {
        const fromOfFrom = answer[answer.length - 2];
        ticketsMap[fromOfFrom].push(from);
        answer.pop();

        if (ticketsMap[fromOfFrom].length > 1) flag = false;
        else from = answer[answer.length - 1];
      }
    }
  }

  return answer;
}
