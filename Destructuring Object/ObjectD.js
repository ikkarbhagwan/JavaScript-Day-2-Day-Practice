let a = 111;
let b = 123;

const obj = { a: 23, b: 34, c: 14 };

({ a, b } = obj);
console.log(a, b);



// Define the orderDelivery function in the restaurant object
const restaurant = {
    orderDelivery: function (obj) {
      console.log(obj);
    }
  };
  
  // Call the orderDelivery function to place a delivery order
  restaurant.orderDelivery({
    time: '22:30',
    address: 'vai mg road'
  });
  


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

