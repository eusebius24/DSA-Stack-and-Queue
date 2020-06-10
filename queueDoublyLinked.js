class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        
        } else {
            this.last.next = newNode;
            newNode.prev = this.last;
            this.last = newNode;
        }

        this.size++;
        return this;
    }

    dequeue() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
            this.first.prev = null;
            temp.next = null;
        }
        this.size--;
        return temp.value;
       
        

    }
}

let starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Chekov');
console.log(starTrekQ);
starTrekQ.dequeue();
console.log(starTrekQ);
starTrekQ.dequeue();
console.log(starTrekQ);