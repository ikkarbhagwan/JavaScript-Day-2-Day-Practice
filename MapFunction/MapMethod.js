// // map data strucuture decalared 

// const Question = new Map([
//     ['Question', 'which is best programming language in the world ?'],
//     [1, 'c'],
//     [2, 'java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'correct'],
//     [false, 'try again!']
// ]);

// console.log(Question);

// // Quiz app 

// console.log(Question.get('Question'));

// for(const [key, value] of Question){
//     if(typeof key === 'number') console.log(`Your answer ${key} : ${value}`)
// };
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(Question.get(Question.get('correct') === answer));

// // convert map to Array 

// console.log([...Question]);

///////////////////////////

// map 

let newArray = [10,20,30,40,50];


let doubleNum = newArray.map(num => num + 2);
console.log(doubleNum);