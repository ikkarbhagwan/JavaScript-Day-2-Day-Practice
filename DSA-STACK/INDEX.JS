// // program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // add element to the stack
//     add(element) {
//         return this.items.push(element);
//     }

//     // remove element from the stack
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }

//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     // check if the stack is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }

//     // the size of the stack
//     size(){
//         return this.items.length;
//     }

//     // empty the stack
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let stack = [];
// stack.push(1);
// console.log(stack);

// stack.push(2);
// console.log(stack);

// stack.push(3);
// console.log(stack);

// stack.push(4)
// console.log(stack);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// stack.pop();
// console.log(stack);

// stack.pop();
// console.log(stack);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Reverse a string using a JavaScript stack 
// function Reverse(str) {


//     let stack = [];

//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);

//     }
//     let reverseStr = '';
//     while (stack.length > 0) {
//         reverseStr += stack.pop();

//     }
//     return reverseStr;


// }

// console.log(Reverse('Bhagwan Ikkar'));





// function inputFiled(str) {

//     let stack = [];

//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);

//     }

//     let reverseString = '';


//     while (stack.length > 0) {
//         reverseString = reverseString + stack.pop();

//     }
//     return reverseString;


// }

// console.log(inputFiled('jay Hanuman'));


// /////////////////////////////////////////////////////////////////////////////

// let queue = [];

// let currentSize = queue.length;
// let maxSize = 5;

// function enqueue(newValue) {
//     queue[currentSize] = newValue;
// currentSize++;

// }

// function display(){
//     console.log(queue);

// }


// display();
// enqueue(10);


///////////////////////////////////////////////////////////////////////////////////////////////

class Stack{
    constructor(){
        this.item = [];
    }

    push(element){
        this.item.push(element);

    }

    pop(){
        if(this.item.length === 0){
            return "underflow";
                return this.item.pop();

        }
    }
    isEmpty(){
        return this.item.length == 0;

    }
}

console.log("Initialize a stack:")
let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


///////////////////////////////////////////////////////////////////////////////////////////////

class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor (head = null){
        this.head = head;
    }
}