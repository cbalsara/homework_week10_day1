// // Section 1

// // what types are these? Write your answer in a comment beside it.

// 1;
// //  number type

// "cat";
// // string type

// true;
// //  boolean type

// [];
// // array type

// {};
// // hash type

// 1.1;
// // decimal number type

// undefined;
// // primitive data type 

// //Section 2

// // what is the truthy/falsiness values of the following
// // write your answer in a comment beside it
// // you can use an if to test this...


// // 1; 
// // true
// var checkToSee = function(a){
//   if (a)
//   return true;
//   else
//   return false; 
// }
// console.log(checkToSee("1"));

// // "cat";
// // true 
// var checkToSee = function(a){
//     if (a)
//     return true;
//     else
//     return false; 
//   }
//   console.log(checkToSee("cat"));


// // true;
// // true
// var checkToSee = function(a){
//     if (a)
//     return true;
//     else
//     return false; 
//   }
//   console.log(checkToSee(true));

// // NaN;
// // false

// var checkToSee = function(a){
//     if (a)
//     return true;
//     else
//     return false; 
//   }
//   console.log(checkToSee(NaN));

// // [];
// true

// var checkToSee = function(array){
//   if (array)
//     return true;
//   else
//     return false;
// }
// console.log( checkToSee([]) );

// // // {};
// // true 

// var checkToSee = function(hash){
//   if (hash)
//     return true;
//   else
//     return false;
// }
// console.log( checkToSee({}) );


// // undefined;
// // false
// var checkToSee = function(a){
//   if (a)
//     return true;
//   else
//     return false;
// }
// console.log( checkToSee(undefined) );


// // "";
// // false 
// var checkToSee = function(a){
//   if (a)
//     return true;
//   else
//     return false;
// }
// console.log( checkToSee("") );

// // 0;
// // false
// var checkToSee = function(a){
//   if (a)
//     return true;
//   else
//     return false;
// }
// console.log( checkToSee(0) );


//Section 3

//Using examples that are different from above...

// //3.1 Assign a variable that is a number
//   var a = 25;
//   console.log(a);

// //3.2 Assign a variable that is a string
//   var b = "Testing String";
//   console.log(b);

// //3.3 Assign a variable that is a boolean
//   var c = true;
//   console.log(c);

// //3.4 Assign a variable that is an object
// var objectSample = "Sample object";
//   var d = objectSample;
//   console.log(d);

// //Section 4
// //4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

// var checkAnswer = function(example){
// if (example)
//   return "Hello";
// else
//   return "Bye";
// }
// console.log(checkAnswer(false));

// //Section 5
// var animals = ["raccoon","hedgehog","mouse","gerbil"];

// //5.1. Assign the first element to a variable
// var a = animals[0];
// console.log("The first animal is a: " + a);

// //5.2. Assign the last element to a variable
// var b = animals[3];
// console.log("The last animal is a: " + b);

// //5.3. Assign the length of an array to a variable
// var c = animals.length;
// console.log("the size of the array is: " + c );

// //5.4. Add an item to the end of the array
// var newAnimal = "bear";
// animals.push(newAnimal);
// console.log(animals);

// //5.5. Add an item to the start of the array
// var firstAnimal = "goat";
// animals.unshift(firstAnimal);
// console.log(animals);

// //5.6. Assign the index of hedgehog to a variable
// var newPosition = animals.indexOf("hedgehog");
// console.log("The hedghog's new position is: " + newPosition);

// //Section 6

// //6.1 Create an array of 5 vegetables

myArray = [ "onion", "lettuce", "carrot", "potato", "cucumber" ]
console.log(myArray);
// //6.2 Loop over the array and write to the console using a "while"
// //6.3 Loop again using a "for" with a counter
// //6.4 Loop again using a "for in"

// //Section 7
// var accounts = [
//   { name: 'jay',
//     amount: 125.50,
//     type: 'personal'
//   },
//   { name: 'val',
//     amount: 55125.10,
//     type: 'business'
//   },
//   { name: 'marc',
//     amount: 400.00,
//     type: 'personal'
//   },
//   { name: 'keith',
//     amount: 220.25,
//     type: 'business'
//   },
//   { name: 'rick',
//     amount: 1.00,
//     type: 'personal'
//   },
// ];
// //7.1 Calculate the total cash in accounts
// //7.2 Find the amount of money in the account with the largest balance
// //7.3 Find the name of the account with the smallest balance
// //7.4 Calculate the average bank account value
// //7.5 Find the value of marcs bank account
// //7.6 Find the holder of the largest bank account
// //7.7 Calculate the total cash in business accounts
// //7.8 Find the largest personal account owner


// //Section 8
// //Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method