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
  
    employee.personInit.call(this,name,birthYear,gender);
    this.empid = empid;
    this.salary =salary;

    }
    console.log(employee);

    let mark = Object.create(employee);
    mark.employeeInit('mark',1999,'male',301,45000);

    console.log(mark);