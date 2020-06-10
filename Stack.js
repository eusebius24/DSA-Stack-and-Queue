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

function peek(stack) {
    const topNode = stack.first.value;
    return topNode;
}

function isEmpty(stack) {
    if(!stack.first) return true;
    else return false;
}

function display(stack) {
    let stackVals = [];
    let currentNode = stack.first;
    while(currentNode) {
        stackVals.push(currentNode.value);
        currentNode = currentNode.next;
    }
    stackVals = stackVals.reverse();
    console.log(stackVals);
    return stackVals;
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let isPalindrome = false;
    // Your code goes here
    let stringArray = s.split("");
    let palindromeStack = new Stack();
    for (let i = 0; i <= stringArray.length - 1; i++) {
        palindromeStack.push(stringArray[i]);
    }
    let reverseArray = [];
    while (palindromeStack.first) {
        let poppedNode = palindromeStack.pop();
        reverseArray.push(poppedNode);
    }
    console.log("reverseArray: ", reverseArray);
    let reverseString = reverseArray.join("");
    console.log(s, reverseString);
    if (reverseString === s) { return true } 
    else { return false };
}

function parenthesesMatch(exp) {
    let expArray = exp.split("");
    let expStack = new Stack();
    for (let i = 0; i < expArray.length; i++) {
        expStack.push(expArray[i]);
    }
    let closeParens = 0;
    let parensMatch = false;
    while(expStack.first) {
        let poppedNode = expStack.pop();
        if(poppedNode === ")") {
            closeParens = 1;
        }
        else if(poppedNode === "(" && closeParens === 1) {
            parensMatch = true;
        }
        else if(poppedNode === "(" && closeParens === 0) {
            parensMatch = false;
        }
    }
    return parensMatch;
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// const starTrek = new Stack();
// starTrek.push("Kirk");
// starTrek.push("Spock");
// starTrek.push("McCoy");
// starTrek.push("Scotty");
// console.log(starTrek);
// console.log(peek(starTrek));
// console.log(isEmpty(starTrek));
// console.log(display(starTrek));

console.log(parenthesesMatch("(2 + 4) * 2"));