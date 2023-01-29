class Node {
  constructor(x, y, data) {
    this.pos = [x, y];
    this.data = data;
    this.left = null;
    this.right = null;
  }

  getData() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.pre = [];
    this.post = [];
  }

  insert(x, y, data) {
    let node = new Node(x, y, data);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      if (current.pos[0] > x) {
        if (!current.left) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  preOrder(node) {
    if (!node) return;

    this.pre.push(node.getData());
    if (node.left) this.preOrder(node.left);
    if (node.right) this.preOrder(node.right);
  }

  getPre() {
    return this.pre.slice();
  }

  postOrder(node) {
    if (!node) return;

    if (node.left) this.postOrder(node.left);
    if (node.right) this.postOrder(node.right);
    this.post.push(node.getData());
  }

  getPost() {
    return this.post.slice();
  }
}

function solution(nodeinfo) {
  var answer = [];
  const nodeinfoIndex = nodeinfo.map((pos, index) => [...pos, index + 1]);
  nodeinfoIndex.sort((a, b) => b[1] - a[1]);
  const bst = new BST();
  nodeinfoIndex.forEach(([x, y, num]) => {
    bst.insert(x, y, num);
  });
  bst.preOrder(bst.root);
  answer.push(bst.getPre());

  bst.postOrder(bst.root);
  answer.push(bst.getPost());

  return answer;
}
