
// Example 1: Changing Text Content

// changing the text 

document.getElementById("demo").innerHTML = " Hello by the way I'm Bhagwan Ikkar";
document.getElementById("demo").style.backgroundColor = "green";



// Example 2: Handling Events

document.getElementById("btn").addEventListener("click", function () {
    alert("Button was clicked!!")
})


// Example 3: Appending Elements 
var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("Item 3"));
document.getElementById("myList").appendChild(newItem);


// Changing Styles 

document.getElementById("demo").style.backgroundColor ="pink";
