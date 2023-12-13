let a= 111;
let b = 123;

const obj = {a:23, b:34, c:14};

({a,b} = obj);
console.log(a,b);



// Nested Objects
const openingHours = {
    fri: {
      open: 12,
      close: 13
    }
  };
  
  // Destructuring assignment
  const { fri: { open, close } } = openingHours;
  
  // Logging the extracted values
  console.log(open, close);
  
