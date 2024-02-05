const  arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

let  max = [];

for(let i = 0; i < arr1.length; i++){
    if(max < arr1[i]){
        max = arr1[i];
    }

}


console.log(max);
