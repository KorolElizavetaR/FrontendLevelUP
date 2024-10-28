class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
    this.size++;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value == value) return true;
      current = current.next;
    }
    return false;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  remove(value) {
    if (!this.head) return false;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    while (current) {
      if (current.next.value == value)
        {
          current.next = current.next.next
          this.size--;
          return true
        }
      current = current.next;
    }
    return false;
  }

  getList() {
    let str1 = '';
    let current = this.head;

    while (current) {
      str1 = str1.concat(current.value + ' ');
      current = current.next;
    }
    return str1;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();
for (let i = 0; i < 10; i++) {
  list.append(i);
}
list.prepend(5);
console.log(list.getList());
list.remove(4);
console.log(list.getList());