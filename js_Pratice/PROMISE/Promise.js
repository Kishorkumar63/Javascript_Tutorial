window.document.title = "Promise  In Javascript";

//=====================Promise Used Fetch the Data In API and DATABASE=========================
// resolve=>True Statement
//reject=>False Statement
// const promise = new Promise((resolve, reject) => {
//   let sum = 1 + 3;
//   if (sum === 2) {
//     resolve("success");
//   } else {
//     reject("Failed");
//   }
// });
// promise.then((res) => console.log(res)).catch((err) => console.log(err));
// then() method Trigger the resolve
// catch() method Trigger the catch

// Using SetTimeOut()
// setTimeout(()=>{console.log("hai");},1000)

// function setTimeoutPromise(duration)
// {
// return new Promise((resolve,reject)=>{
//     setTimeout(resolve("I am Resolve"),duration)
// })
// }
// setTimeoutPromise(1000).then((res)=>{
//     console.log("Promise Used In Function AND  setTimeOut() Method :",res );
// })

//CallbackHell Problem means nested timer Function

// setTimeout(() => {
//   console.log("Normal : 1 setTimeOut:1");
//   setTimeout(() => {
//     console.log("Normal  :2 setTimeOut:2");
//     setTimeout(() => {
//       console.log("Normal  :3  setTimeOut:3");
//     }, 250);
//   }, 250);
// }, 250);

// CallBackhell used function

// function setTimeOutPromise(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, duration);
//   });
// }

// setTimeOutPromise(250).then(() => {
//   console.log("Normal : 1 setTimeOut:1");

//   setTimeOutPromise(250).then(() => {
//     console.log("Normal : 2 setTimeOut:2");

//     setTimeOutPromise(250).then(() => {
//       console.log("Normal : 3  setTimeOut:3");
//     });
//   });
// });

// setTimeOutPromise(250).then(()=>{
//     console.log("Normal : 1 setTimeOut:1");
//     return setTimeOutPromise(250)
// }).then(()=>{
//     console.log("Normal : 2 setTimeOut:2");
//     return setTimeOutPromise(250)
// }).then(()=>{
//     console.log("Normal : 3 setTimeOut:3 ");
//     return setTimeOutPromise(250)
// })

// Using Promise In AddEventListener

// const btn=document.querySelector("button");

// function addEventPromise(element,eventMethod)
// {
// return new Promise((resolve,reject)=>{
// element.addEventListener(eventMethod,resolve);
// })

// }

//                                 //accessing EventListner Properties
// addEventPromise(btn,"click").then((e)=>{
//     console.log(e);
//     console.log("Hai");
// })

// PROMISE hav All() , Any ()  , Race()  ,Allsettled()  method  => handle the Mutliple PROMISE

//Any()  Method

//   console.log(Promise.resolve("Success"));
// Promise.all(
//   [
//     Promise.resolve("Success"),
//     Promise.resolve("Success"),
//     Promise.resolve("Success"),

//   ],

// ).then((res)=>{
// console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Promise.all(
//   [
//     Promise.resolve("Success"),
//     Promise.resolve("Success"),
//     Promise.resolve("Success"),
//     Promise.reject("failed")
//   ],

// ).then((res)=>{
// console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Any()  It Print Resovle method Only
// Promise.any(
//   [
//     Promise.reject("failed"),
//     Promise.reject("failed"),

//     Promise.reject("failed"),
//     Promise.resolve("Success Ok"),

//   ],

// ).then((res)=>{
// console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// race() it print First Promise
// Promise.race(
//     [
//       Promise.reject("failed"),
//       Promise.resolve("Success"),
//       Promise.resolve("Success"),

//       Promise.reject("failed"),
//       Promise.resolve("Success"),

//     ],

//   ).then((res)=>{
//   console.log(res);
//   }).catch((err)=>{
//       console.log(err);
//   })

// allSettled it print then() mehtod including Reject() method Not Print Catch() method

// Promise.allSettled(
//     [
//       Promise.reject("failed"),
//       Promise.resolve("Success"),
//       Promise.resolve("Success"),

//       Promise.reject("failed"),
//       Promise.resolve("Success"),

//     ],

//   ).then((res)=>{
//   console.log(res);
//   }).catch((err)=>{
//       console.log(err);
//   })

// Finally() method

// const promise = new Promise((resolve, reject) => {
//       let sum = 1 + 3;
//       if (sum === 2) {
//         resolve("success");
//       } else {
//         reject("Failed");
//       }
//     });

//     promise.then((res)=>console.log(res)).catch((err)=>console.log(err)).finally(()=>console.log("all Completed..."))

// const getPost=()=>{

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const Posts=["post-1","post-2","post-3","post3"];
//             resolve(Posts)

//         },1000)
//     })
// }
// const getComments=()=>{

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const comment=["Comment-1","Comment-2","Comment-3","Comment-3"];
//             resolve(comment)

//         },2000)
//     })
// }

// Promise.all([getPost(),getComments()]).then((resluts)=>{
// const [posts ,comments] =resluts
// console.log(posts);
// console.log(comments);
// }).catch((err)=>{
//     console.log(err);
// })

// It have resovle && reject data

// 1. get data it Converted Into JSON() method and it send then() method

//used bulid live chating system
fetch("http://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });
