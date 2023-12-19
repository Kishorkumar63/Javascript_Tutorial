// let user={
//     name:"Kishor",
//     age:20,
//     city:"cuddalore"
// }

// let arr_key=Object.keys(user)
// //console.table(arr_key);
// let arr_value=Object.values(user)
// //console.log(arr_value);
// for(let i=0;i<arr_key.length;i++)
// {
//     console.log(arr_key[i]+":"+arr_value[i]);
// }

//function With Aribatrary arguments

// function sum()
// {
//     let total=0;
//     for(let i=0;i<arguments.length;i++)
//     {
//         total+=arguments[i]
//     }
//     return total
// }
// console.log(sum(24,24));
// console.log(sum(12,12,12,12));

//function Express

// const add=function(a,b)
// {
//     return a+b;
// }

// console.log(add(30,30));

// ARROW FUNCTION OR FACT ARROW FUNCTION

//Arrow fun using map ,reduce,filter
 
//1.   using Arrow function In map
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);
// let Double = numbers.map((num) => num * 2);
// console.log("Double :", Double);

// //2.  using Arrow function In Filter
// let Words = ["Apple", "Banana", "orange", "grapes", "m", "c"];
// let count = Words.filter((word) => word.length < 5);
// console.log(count);

// //3.  using Arrow function  In Reduce
// let total = numbers.reduce((sum, num) => sum + num, 0);
// console.log("Total In Rdeuce :", total);

//4.  using Arrow function to create a Closure

// let createCount = () => {
//   let count = 0;
//   return () => {
//     count++;
//     return count;
//   };
// };
// let counts = createCount();
// console.log(counts);
// console.log(counts());
// console.log(counts());

// callBack Function

// function myCallBack() {
//   console.log("I am CallBack Function");
// }

// myCallBack();

// function higherOrderFunction(fun) {
//   fun();
// }
// higherOrderFunction(myCallBack);

// //settimeOut
// function count() {
//   console.log("hai");
// }
// setInterval(count, 1000);


// Nullish COalescing Operator (??)


const a=null??"KK" //there Is No In a means Print Right SIde Of the Value
console.log(a);

// Nullish COalescing assingnement Operator  ??=
const user={
    name:"Kishor"
}
console.log(user.name);
user.city??="Cuddalore"
console.log(user.city??="Cuddalore");
console.log(user);
