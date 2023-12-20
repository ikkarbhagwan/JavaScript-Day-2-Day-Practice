// Inheritance Beetween classes 

class Women{
    constructor(name, birthYear, gender) {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;

    }
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);

    }
}

class Men extends Women {
    constructor(name, gender, birthYear, empid, salary) {
        super(name, gender, birthYear);

        this.empid = empid;
        this.salary = salary;



    }
    calcSalary(){  // this are the methods for men class
        return this.salary * 12;
    
    }

    empDetails(){
        console.log(this.name);
        console.log(this.empid);
         
    }

}
const mark = new Men('mark', 'male', 1999, 202, 54000);
console.log(mark);
