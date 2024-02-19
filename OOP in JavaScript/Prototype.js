
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make } is going ${this.speed}km/h.`);
}
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make } is going ${this.speed}km/h.`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 200);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();




/////////////////////////////////////////////////////////////////////////////////////////////////////////


const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make } is going ${this.speed}km/h.`);
}
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make } is going ${this.speed}km/h.`);
}

const X5 = new Car('BMW', 120);
const volvo = new Car('Mercedes', 200);

volvo.accelerate();
X5.accelerate();
volvo.brake();
X5.accelerate();

