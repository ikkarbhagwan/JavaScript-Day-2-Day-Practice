let data = [];
let currentSize = data.length;
let max = 6;

function push(newValue){

    
    if(currentSize >= max){
        console.log("Stack is full you can't add" + newValue );
        
    }
    
    data[currentSize]=newValue;
    currentSize+=1;
   

}

push(56);
push(12);
push(65);
push(78);
push(656);

console.log(data);

