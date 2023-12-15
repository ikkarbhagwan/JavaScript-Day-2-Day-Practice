// We leaning the closures =
//  "A closure is a fucntion which has acces to to its outer scope's variables."


// in other language we can say that A closure is a inner function who which is declared in its outer functions whio has acces to its variable..

// 1

// const closure = 10;
// function show(){
//     var j = 20;
//     document.write(j + "<br>");
//     document.write(closure + "<br>");
// }
// show();

// 2

const isOuterFunction = (a) => {
    let b = 45;


    const isInnerFunction = () => {
        let sum = a + b;
        console.log( `The sum of two number is ${sum}`);

    }
    isInnerFunction();

}

isOuterFunction(10);