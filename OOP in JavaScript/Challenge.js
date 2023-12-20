
// here is the challenge 

class carCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;

    }
}

accelerate(){
    this.speed  += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);


}

brake(){
    this.speed  -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    

}

get speedUS (){
    return this.speed / 1.6;

}

set speedUS (speed){
    this.speed = speed * 1.6;

}


const ford = new carCl ('FORD', 120);
console.log(ford.speedUS);
ford.accelerate();


 