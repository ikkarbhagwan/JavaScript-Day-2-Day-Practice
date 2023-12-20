// Inheritance Beetween classes 

class Women{
    constructor (name, birthYear, gender){
        this.name = name ;
        this.birthYear = birthYear;
        this.gender = gender;
        
    }
    calcAge(){
        console.log(new Date().getFullYear() - this.birthYear);

    }
}

class Men extends Women{
    constructor(name,gender,birthYear,empid,salary){
        super(name,gender,birthYear);


    }

}
const mark = new Men('mark','male',1999,202,54000);
console.log(mark);
