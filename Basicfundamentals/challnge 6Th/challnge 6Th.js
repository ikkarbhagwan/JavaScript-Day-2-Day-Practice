// function to calculate average score 

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


// Test Data 1
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

// Test Data 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

// function to cheak winner 

const cheackWinner = (avgDolphins, avgKoalas) =>{
    if(avgDolphins >= 2* avgKoalas){
        console.log(`"Dolhines win (${avgDolphins} vs. ${avgKoalas})"`);

    }else if(avgKoalas>=2* avgDolphins) {
        console.log(`"koalas win (${avgKoalas} vs. ${avgDolphins})"`);

    }else{
        console.log("No one winss!!!");
    }
};
cheackWinner(scoreDolphins1,scoreKoalas1);
cheackWinner(scoreDolphins2,scoreKoalas2);