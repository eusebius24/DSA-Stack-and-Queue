class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++;
    }

    dequeue() {
        if(!this.first) return null;
        let temp = this.first;
        this.first = temp.next;
        this.size--;
        if(this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return temp.value;
    }
}

function peek(queue) {
    console.log(queue.first);
}

function isEmpty(queue) {
    if(!queue.first) {
        return true;
    }
    else {
        return false;
    }
}

function display(queue) {
    let nodes = [];
    let currentNode = queue.first;
    while(currentNode) {
        nodes.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return nodes;
}

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Chekov');
console.log(starTrekQ);
peek(starTrekQ);
console.log(isEmpty(starTrekQ));
console.log(display(starTrekQ));
starTrekQ.dequeue();
console.log(display(starTrekQ));
starTrekQ.dequeue();
console.log(display(starTrekQ));