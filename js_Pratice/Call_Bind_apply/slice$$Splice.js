// const number=[1,2,3,4,5,6,7,8,9,0]

//slice(start,end)

// console.log("Slice :",number.slice(8));
// console.log(number.slice(5,8));
// console.log(number.slice(5,8));

//splice (start,length,new element)

// remove form Element form in Array
// it will change original array

/*const n1=[1,2,3,4,5,6,7,8,9,10]
console.log("Before splice",n1);
let remove_Ele=n1.splice(3)
console.log("remove element :",remove_Ele);


const n2=[1,2,3,4,5,6,7,8,9,10]
console.log("Before splice",n1);
remove_Ele=n2.splice(2,5)
console.log("remove element :",remove_Ele);
console.log("after remove element",n2);


const n3=[1,2,3,4,5,6,7,8,9,10]

console.log("Before splice",n3);
remove_Ele=n3.splice(2,5,90,100)
console.log("remove element :",remove_Ele);
console.log("after remove element",n3);
*/

//destructuring In Array
//before ES6

/*
const number=[1,2,3,4,5,6,7,8,9,0]

console.log(number[0]);
console.log(number[3]);
console.log(number[4]);
console.log(number.splice(2,5));
*/

//After ES6

/*
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const [first, secon, ...reset] = number;

console.log(first);
console.log(secon);
console.log(reset);
*/

//destructuring In Object
//before ES6

/*
const person = {
  name: "kishor",
  age: 20,
  gender: "Male",
};

const name = person.name;

const age = person["age"];
const gender = person["gender"];

console.log(name);
console.log(age);
console.log(gender);  */

//ES6

/*
const person = {
    name: "kishor",
    age: 20,
    gender: "Male",
  };

  const {name,age,gender}=person
  console.log(name);
  */

//using Deafult Values With array Destructing

/*
  const number=[12,34]

  const [x,y,z=90]=number

  console.log(x);
  console.log(y);
  console.log(z);
  */

//swapping
//ES6
/*
let a = 30;
let b = 90;
[a, b] = [b, a];
console.log(a);
console.log(b);
*/


//Skipping unWanted Items With Destructring Assignement

// let myArray=[1,2,3,45,66,90]
// let [first, ,third,,foruth]=myArray
// console.log(first);
// console.log(third);
// console.log(foruth);

// Diiferenc b/t Rest Parameter function and spread operator

//rest parameter
/*
function kk(first,secon,...third)
{
    console.log(first);
    console.log(secon);
    console.log(third);
}
kk("kishor","kumar","ramu","janu")
*/

//spread operator


let myArray=[1,2,3]
console.log(myArray);
let newArray=[...myArray,4,5,6]
console.log(newArray);
