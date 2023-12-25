document.title="Prototype && prototypal inhertitance "



 let arr=["apple","orange"]

// const object={
//     name:"Kishor",
//     age:21,
//     method:function()
//     {
//         console.log(this.name);
//     },
//     mehtod_2()
//     {
//         console.log(this.age);
//     },
//     method_3:()=>{
// console.log("Arrow Function ");
//     }
// }

// user defined Function also Act as object in js

// function myFunction()
// {

// }

//two way to See array prototype

// console.log(arr.__proto__);
// console.log(Array.prototype);


//prototype chaining

//It print array  prototype is a Object
//console.log(arr.__proto__.__proto__);
//It Object prototype value Default = Null
//console.log(arr.__proto__.__proto__.__proto__);


///OBJECT


// console.log(object.__proto__);
// console.log(object.__proto__.__proto__);



//Function

// console.log("It is fun protoypt",myFunction.__proto__);
// console.log(myFunction.__proto__.__proto__);



const object={
    name:"Kishor",
    age:21,
    method:function()
    {
        console.log(this.name);
    },
    mehtod_2()
    {
        console.log(this.age);
    },
    method_3:()=>{
console.log("Arrow Function ");
    }
    ,
    city:"cuddalore"
}

const object2={
    name:"Kishor",
   
}

console.log(object.__proto__);
console.log(object2.name);



// Sharing Data In One Object to Another Object is called add prototpy inhertiance


object2.__proto__=object
console.log(object2.city);



//creating  prototype new function Array

Array.prototype.doubleLength=function()
{
    return 2+3
}

console.log(arr.__proto__);
console.log(arr.doubleLength());

//creating new prototype function 
Function.prototype.mybind=function()
{
    console.log("This bind Function  Prototype");
}

console.log(myFunction.__proto__);
console.log(myFunction.mybind());