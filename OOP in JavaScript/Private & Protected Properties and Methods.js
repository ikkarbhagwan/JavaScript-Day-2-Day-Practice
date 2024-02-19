class user {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
        
    }

    login(){
        console.log(this.email, 'just logged in!');

    }
    logout(){
        console.log(this.name,'just logged off!');

    }

    updateScore(){
        this.score++;
        console.log(this.score,'score is updated :');

    }
}

var userOne = new user('thisssss@gmail.com', 'yiyi');
var userTwo= new user('yamaha@gmail.com', 'pipi');


////////////////////////////////////////////////////////////////////////////////////////////

class user {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
        
    }

    login(){
        console.log(this.email, 'just logged in!');

    }
    logout(){
        console.log(this.name,'just logged off!');

    }

    updateScore(){
        this.score++;
        console.log(this.score,'score is updated :');

    }
}

var userOne = new user('thisssss@gmail.com', 'yiyi');
var userTwo= new user('yamaha@gmail.com', 'pipi');




