
// What is the temprature amplitude ? 

const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17,
    15, 9, 5];

const calCampAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
  

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
        if(typeof curTemp !== 'Number') continue;
    }
    console.log(max, min);

};
calCampAmplitude(tempratures);