
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

// Difference between deep copy and shallow copy

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