const nestedArray = [4, 5, [7, [1], 8], 7];

const findSum = (arr) => {

return arr.reduce( (sum, current) => {

    if(Array.isArray(current)){
        return sum + findSum(current);

    }else{
        return sum + current;

    }

}, 0)

};

const result = findSum(nestedArray);
console.log(result);

