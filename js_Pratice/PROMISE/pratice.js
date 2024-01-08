document.title = "Pratice_Promise";

// const promise = new Promise((resolve, reject) => {
//   const a = 1 + 2;
//   if (a === 3) {
//     resolve("So Success");
//   } else {
//     reject("Failed");
//   }
// });
// promise
//   .then((res) => {
//     console.log("Answer :", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function Welcome() {
//   return new Promise((resolve, reject) => {
//     {
//       setTimeout(reject("Resolve In setTimeout"), 2000);
//     }
//   });
// }

// Welcome()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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

// setTimeout(() => {
//   console.log("Normal : 1 setTimeOut:1");
//   setTimeout(()=>{
//     console.log("Normal : 2 setTimeOut:2"); 
//     setTimeout(()=>{
//         console.log("Normal : 3 setTimeOut:3"); 
//     },2000)
// },1000)
// }, 250);




// CallBackhell used function



function setTimeOutPromise(duration) 
{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,duration)
    })
}

// setTimeOutPromise(1000).then(()=>{
//     console.log("Normal : 1 setTimeOut:1");
//     setTimeOutPromise(2000).then(()=>{
//         console.log("Normal : 2 setTimeOut:2");
//     })
//     setTimeOutPromise(3000).then(()=>{
//         console.log("Normal : 3 setTimeOut:3");
//     })

// })

// setTimeOutPromise(2000).then(()=>{
//     console.log("Normal : 1 setTimeOut:1");
//     return setTimeOutPromise(4000)
// }).then(()=>{
//     console.log("Normal : 2 setTimeOut:2");
//     return setTimeOutPromise(4000)
// }).then(()=>{
//     console.log("Normal : 3 setTimeOut:3");
//     return setTimeOutPromise(5000)
// })


// Using Promise In AddEventListener

const btn=document.querySelector(".btn");

// function addEventPromise(element,eventMethod)
// {
// return new Promise((resolve,reject)=>{
// element.addEventListener(eventMethod,resolve);
// })

// }

                                //accessing EventListner Properties
// addEventPromise(btn,"click").then((e)=>{
//     console.log(e);
//     console.log("Hai");
// })


// function addEventListener(element,event)
// {
//     return new Promise((resolve,reject)=>{
//         element.addEventListener(event,resolve("hello This Click Eevnt"))
//     })
// }

// addEventListener(btn,"click").then((res)=>{
//     console.log(res);
// })



Promise.all(
  [
    Promise.reject("failed"),
    Promise.resolve("Success"),
    Promise.resolve("Success"),
    Promise.resolve("Success"),
   

  ],

).then((res)=>{
console.log(res);
}).catch((err)=>{
    console.log(err);
})


// Any()  It Print Resovle method Only
Promise.any(
  [
    Promise.reject("failed"),
    Promise.reject("failed"),

    Promise.reject("failed"),
    Promise.resolve("Success Ok"),

  ],

).then((res)=>{
console.log(res);
}).catch((err)=>{
    console.log(err);
})



// race() it print First Promise
Promise.race(
    [
      Promise.reject("failed"),
      Promise.resolve("Success"),
      Promise.resolve("Success"),

      Promise.reject("failed"),
      Promise.resolve("Success"),

    ],

  ).then((res)=>{
  console.log(res);
  }).catch((err)=>{
      console.log(err);
  })



  // allSettled it print then() mehtod including Reject() method Not Print Catch() method

Promise.allSettled(
    [
      Promise.reject("failed"),
      Promise.resolve("Success"),
      Promise.resolve("Success"),

      Promise.reject("failed"),
      Promise.resolve("Success"),

    ],

  ).then((res)=>{
  console.log(res);
  }).catch((err)=>{
      console.log(err);
  })




