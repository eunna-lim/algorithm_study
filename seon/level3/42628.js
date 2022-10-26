class Queue {
  constructor() {
    this.queue = [];
  }

  push(number) {
    this.queue.push(number);
    this.queue.sort((a, b) => a - b);
  }

  pop() {
    if (!this.queue.length) return;
    this.queue.pop();
  }

  shift() {
    if (!this.queue.length) return;
    this.queue.shift();
  }

  getMaxMin() {
    if (!this.queue.length) return [0, 0];
    else return [this.queue[this.queue.length - 1], this.queue[0]];
  }
}

function solution(operations) {
  const q = new Queue();

  operations.forEach((operation) => {
    const [command, num] = operation.split(" ");
    if (command === "I") q.push(Number(num));
    else {
      if (num === "1") q.pop();
      else q.shift();
    }
  });

  return q.getMaxMin();
}
