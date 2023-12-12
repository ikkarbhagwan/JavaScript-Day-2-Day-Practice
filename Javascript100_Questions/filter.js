

//////////////////////////////////////////////////////////////////////

// filter method used () 

let array = [10, 20, 30, 40];

let x = array.filter((num) => num % 5 === 0)
console.log(d);


//////////////////////////////////////////////////////////////////////
// slice methodf used 

let array1 = [1, 2, 1, 33, 44, 55];

let y = array1.slice(1, 5);
console.log(y);

//////////////////////////////////////////////////////////////////////

// What is the temprature amplitude ? 

const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17,
    15, 9, 5];

const calCampAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    const curTemp = temps[i];

    for (let i = 0; i < temps.length; i++) {
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
        if(typeof curTemp !== 'Number') continue;
    }
    console.log(max, min);

};
calCampAmplitude(tempratures);