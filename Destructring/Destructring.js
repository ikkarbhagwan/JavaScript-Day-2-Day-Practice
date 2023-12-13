

const restaurant = {
    name : 'Asshirwad bhojan',
    location : 'Ganesh park lane No.2 Lohegaon Pune ',
    categories : ['indian', 'Italian', 'American', 'maharashtrian'],
    startmenu : ['Bhaji-Bhakari', 'poli', 'rice'],
    mainMenu :['pizza', 'pasta', 'paratha'],
    
    order : function(starterIndex, mainIndex) {
        return [this.startmenu[starterIndex]],[this.mainMenu[mainIndex]];
    },
};

let [main , secondary] = restaurant.categories;
console.log(main, secondary);


// set to primary as secondary and secondary as primary 

[main, secondary] = [secondary, main];
console.log(main,secondary);


//receive two return values from  a function

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse)


//What happened when we have nested array
//nested Destructuring 
const nested = [1,[3,4]];

const [i ,[j, k]] = nested;
console.log(i,j,k);


//default value 

 
[8,9]  //this is the problem 
 
const [a, b] = [8, 9];
console.log(a,b);

