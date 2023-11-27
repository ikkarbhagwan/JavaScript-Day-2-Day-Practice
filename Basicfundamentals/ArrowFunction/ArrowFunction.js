// ArrowFunction

// const calcAge = birthYear => 2023- birthYear;
// const age3 = calcAge(1999);
// console.log(age3);


// 2nd

// const yerasUntillRetirement = birthyear => {
//     const age =2023 - birthyear;
//     const retirement = 60 - age;
//     return retirement;
// }
// console.log(yerasUntillRetirement(1999));

const yerasUntillRetirement = (birthyear ,firstName)=> {
    const age = 2023 - birthyear;
    const retirement = 65- age;
    return `${firstName} retires in ${birthyear} years.`;
}
console.log(yerasUntillRetirement( 24, 'bhaguuu'));
console.log(yerasUntillRetirement( 10, 'ramu'));
console.log(yerasUntillRetirement( 23, 'damu'));
console.log(yerasUntillRetirement( 22, 'samu'));


