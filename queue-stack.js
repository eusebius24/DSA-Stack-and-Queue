class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let tempNode = this.first;
            this.first = newNode;
            this.first.next = tempNode;
        }
        return this.size++;

    }

    pop() {
        var poppedNode;
        if(!this.first) return null;
        else {
            poppedNode = this.first;
            this.first = this.first.next;
        }
        this.size--;
        return poppedNode.value;
    }
}

const stack1 = new Stack();
const stack2 = new Stack();

stack1.push("Kirk");
stack1.push("Spock");
stack1.push("Uhura");
stack1.push("Sulu");
stack1.push("Chekov");
console.log(stack1);
function queueStack(stack1, stack2) {
    while(stack1.first) {
        var temp = stack1.pop();
        stack2.push(temp);
    }
    return stack2;
}
console.log(queueStack(stack1, stack2));