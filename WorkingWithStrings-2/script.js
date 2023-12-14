

// split 

console.log('a + very + nice + string'.split(' + '));
console.log('a + very + nice + string'.split('+').reverse().join(''));

//  to capitilize firstLettere 

const capitalizeName = function(name){
const names = name.split(' ');
const namesUpper =[];
for (const n of name ){

    namesUpper.push(n[0].toUpperCase() + n.slice(1));
}
console.log(namesUpper.join(''));
}

capitalizeName('Jessica is an winter!!');
capitalizeName('Jessica is an summer!!');