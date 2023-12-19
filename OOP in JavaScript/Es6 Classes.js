
// class declaration 

class PersonCl {
constructor (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
    
}

clacAge(){
    console.log(2037 - this.birthYear)
}

}

const jessica = new PersonCl('jessica', 2023);
console.log(jessica);
jessica.clacAge();

