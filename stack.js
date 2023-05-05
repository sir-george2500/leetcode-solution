/**
 * This code is use to implement the stack the Stack Data Structure 
 * using Javascript
 */
class Stack{
    constructor(){
        this.items = [];
    }

    push(elem){
        this.items.push(elem)
    }

    pop(elem){
        if(this.items.length==0) return "underflow"
       return this.items.pop(elem)
    }

    peek(){
        return this.items[this.items.length-1];
    }

    printStack(){
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack()); // Output: 10 20 30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); 