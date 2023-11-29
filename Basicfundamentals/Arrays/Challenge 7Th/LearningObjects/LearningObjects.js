const PersonData = {
    firstNmae :'bhagwan',
    lastName : 'patil',
    Age:24,
    job : 'Teacher',
    friends: ['moke','damu','ramu']

};
console.log(PersonData.lastName);
console.log(PersonData['lastName']);

const nameKey = 'Name';
console.log(PersonData['first' + nameKey]);
console.log();