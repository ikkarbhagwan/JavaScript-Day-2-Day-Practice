let data = [];
let currentSize = data.length;
let max = 6;

function push(newValue) {


    if (currentSize >= max) {
        console.log("Stack is full you can't add" + newValue);

    }

    data[currentSize] = newValue;
    currentSize += 1;
}


function pop(){
    if(currentSize > 0 ){
        currentSize -=1;
        data.pop();

    }else{
        alert('size is too small');

    }
}

push(56);
push(12);
push(65);
push(78);
push();
push();


console.log(data);

