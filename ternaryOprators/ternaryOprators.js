let x = 20;

let z = x < 10 ? "this is large Num" : " this is small Num";

console.log(z);


// switch statements 

let day = "monday";

switch (day) {
    case "sunday":
        console.log("This is your day");
        break;

    case "monday":
        console.log("This is the start of the week");
        break;

    case "tuesday":
        console.log("This is a school day");
        break;

    case "wednesday":
        console.log("This is another school day");
        break;

    case "thursday":
        console.log("Yet another school day");
        break;

    case "friday":
        console.log("Last school day before the weekend");
        break;

    case "saturday":
        console.log("Weekend begins!");
        break;
        

    default:
        console.log("Enjoy your day");
        break;
}
