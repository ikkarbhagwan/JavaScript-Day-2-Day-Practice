// Implementing inheritance using Object.crete() Method

let person = {
    caclAge() {
        return new Date().getFullYear() - this.birthYear;

    },

    }

    personInit(name,birthYear,gender){
    this.name = name;
    this.birthYear = birthYear;
    this.gender;
    
}

let employee = Object.create(person);
// in this employee object we passes the [Person] object as a prototype object
//now it will create an empty object and passes two methods in it [callAge,PersonInit]
employee.employeeInit = function(name,BirthYear,gender,empid,salary){
  
    employee.employeeInit();
    this.empid = empid;
    this.salary =salary;

    }

    let mark = Object.create(employee);
    mark.employeeInit();
    
    console.log(mark);