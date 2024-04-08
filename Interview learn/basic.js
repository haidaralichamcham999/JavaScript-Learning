
// what is the output of a
var a;
function some(){
    var a =10;
}

console.log(a)

// what is the output of c and d
var c =1;
var d = c;
d = 5
console.log(c)
console.log(d)


// what is the output of a1 and b1
var a1 =['first', 'second']
var b1 = a1;
b1.push('third')

// Difference between deep copy and shallow copy

/*Shallow copy creates a new object by copying the memory address of the original object. The memory addresses of the elements remain the same.
Deep copy, on the other hand, creates a new object where every value gets a new memory address. It’s a bit-wise copy that ensures no shared references.


When you create below values, they are tightly coupled with the variable they are assigned to. They only exist once. That means you do not really have 
to worry about copying primitive data types in JavaScript. When you make a copy, it will be a real copy. 
Number — e.g. 1
String — e.g. 'Hello'
Boolean — e.g. true
undefined
null
---------------------------------
The spread operator behaves differently based on whether the data is nested or not:
For non-nested data, it deep copies.
For nested data, it deep copies the top-level data and shallow copies the nested data. */

// Example :
//nested means shallow copy one will override other(shared memory space)
// For more detail visit 
//https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/
const oldObj = { a: { b: 10 } };
const newObj = { ...oldObj };

oldObj.a.b = 2;
console.log(oldObj ,"newObj --->", newObj)

// Deep Copy means take different space in memory
const obj1 = { a: 3 };
const newObjOne = { ...obj1 };
newObjOne.a =4
console.log(obj1,"newObjOne 1 --->", newObjOne)


// Difference between Promise.all() and allsetealed

// what is the output of .then and see the output value as well.
const someProm = ()=>new Promise((res) =>{
    res('Done')
})
// try uncommeting the below code  as well
// var value =someProm().then((res)=>{
someProm().then((res)=>{
    console.log("first",res);
    return {name:res, age :18}
}).then((res)=>{
    console.log("second",res)
}).then((res) =>{
    console.log('third', res)
})


// definition of useCallback in react.

function loop(){
    for(var i =0;i<5;i++){
        console.log(i)
    }
    console.log('Check What is the value of i ---> ',i)
}

// this is undefined in arrow function
 const checkThis =()=> console.log('this --->',this)

 // how to create call back function example try in class as well

 function addEvent(callback){
    return callback();
 }
 addEvent(()=> console.log('callback'))

 // difference between asyn await and promises.

 // useState is asyn function because any changes in state it render the 
 // ui

 // debounce and throwtlink
 // IIFE (Immediately Invoked Function Expressions)

 // assigning and calling function

 function assignMe(a, b){
    return a +b
 }

 const q = assignMe; // its called assigning function to variable it you write it as assingMe() then it will give you function return value
 q(3,5); // It means calling a function

 // Curry Function its like callback

 function curried(x) {
    return function(y) {
      return function(z){
        return x + y + z
      }
    }
  }

  curried(1)(2)(3)

  // learn typeof instanceof Array.isArray(), isNAN

  // can you guess the output of following logical if condition

  var g=2, h=2,s=2;
  if(g === h === s){
    console.log('condition is true')
  }else{
    console.log('condition is false');
  }

  // output of the above question is false becuas g === h is true and true === s is false