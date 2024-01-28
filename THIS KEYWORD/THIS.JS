const user = {
    username:"hitesh",
    price:999,

    welcomeMsg: function (){
        console.log(`${this.username} welcome to website`)
    }
}

user.welcomeMsg();
user.username = "ramroaas"
user.welcomeMsg();
