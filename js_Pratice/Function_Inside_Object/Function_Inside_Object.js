window.document.title="Function_Inside_Object"

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
// console.log(object);
// console.log(object.method); //It Print Method Definition
// object.method()
// object.mehtod_2()
// object.method_3()



// Arrow ()=> function And This =>KeyWord working in obeject

    //this keyword refering object

// console.log(this);// It Print Current Window Object Method() and Property()
           
// var age=25

// function info()
// {
//     console.log(age);
//     console.log(this.age);
//     console.log(this);
// }
// info()
// window.info()



// //this keyword refering Current object
// const user={
//     age:20,
//     fun:info
// }

// user.fun()

// //nested Function 



// this is Function call pannura antha particular Object deatils
// const user_2={
//     age:20,
//     fun:info,
//     nested:{
//         age:80,
//         fun:info
//     }
// }

// user_2.fun()
// user_2.nested.fun()

var age=90

const std={
    age:23,
    myFun:function()
    {
        console.log("Fun 1:",this.age);
        console.log(this);
        function fun2() 
        {
            console.log("Fun 2",this.age);
    console.log(this);
        }
         fun2() // Directly call that refer The window Object


          //using arrow Function  it refer only current Object
    const fun3=()=>{
     
        console.log("Fun 3",this.age);
        console.log(this);
    }
    fun3()
    },
   
}
std.myFun()

const fun4=()=>{
     
    console.log("Fun 4",this.age);
    console.log(this);
}
fun4()

