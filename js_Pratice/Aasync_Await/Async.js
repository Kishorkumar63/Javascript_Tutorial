// async function welcome()
// {
//     return "hello world"
// }

// console.log(welcome());
// //resolve ,reject
// //then ,catch

// welcome().then(res=>console.log(res)).catch(err=>console.log(err))

//---------------------------------------------

// async function getData() {
//   let blogPost = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Blog Post");
//     }, 2000);
//   });

//   let blogComment = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Comment For The Blog");
//     }, 5000);
//   });
//   console.log("Fetching Post.....");
//   let post = await blogPost;
//   console.log(post);
//   console.log("Fetching comment.....");
//   let comment = await blogComment;
//   console.log(comment);
//   return [post, comment];
// }

// console.log("Welcome Blog Post");

// let data = getData();
// data.then(value=>console.log(value)).catch(err=>console.log(err))

// console.log(data);


//Using then and catch in Promise



let result=function(marks)
{
    return new Promise(function(resolve,reject){
        console.log("Claculate result");
        setTimeout(()=>{
            let total=0;
            result="pass"
            marks.forEach(mark => {
          total+=mark;
          if(mark<35)
          result="Fail"      
            });
            resolve({total:total,result:result})
        },2000)
    })
}


let grade=(response)=>{
    return new Promise(function(resolve,reject){

        if(response.result==="pass")
        {
            let avg=response.reject/3
            let gradetext="Grade D"
            if(avg>90 && avg<=100)
            {
                gradetext="Grade A"
            }
            else if(avg>80 && avg<=89)
            {
                gradetext="Grade B"
            }
            else if(avg>70 && avg<=79)
            {
                gradetext="Grade C"
            }
            resolve(gradetext)
            
        }
        else{
            reject("No Grade")
        }
    })
}

// result([90,89,90]).then(value=>{
//     console.log("Total",value.total);
//     console.log("Result",value.result);
//     return grade(value)
// }).then((data)=>console.log(data)).catch((err)=>console.log(err))


//using Async  getting error try Catch Block
 const getres=async ()=>{
try {
    
const value=await result([9,9,9])
console.log("Total",value.total);
    console.log("Result",value.result);
gradetext=await grade(value)

} catch (error) {
    console.log(error);
}

}
getres()