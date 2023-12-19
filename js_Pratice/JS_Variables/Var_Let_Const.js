window.document.title = "Var_Let_Const  Varables";

/*

  1.Var  => 2015 ES6 
  2.Let  =>1997
  3.const =>1997
*/


// var a=25
// var b=35
// console.log(a+b);


//Difference


// 1.Scope
          // Var keyword Act as Global Scope
          // let keyword Act as With in the Scope or Inside the Scope
          // const keyword Act as With in the Scope or Inside the Scope
          
if(true)
{
    //var msg="welcome Js World"
    let msg="welcome Js World"
   // const msg="welcome Js World"
}
// console.log(msg);



// 2.Variable_declaration
              // Var keyword Redeclaration The Value
              // let keyword Cannot be Redeclaration The Value
              // const keyword Cannot be Redeclaration The Value
              

// var a=25;
// console.log(a);
// var a=50;
// console.log(a);


// let b =90
// console.log(b);
// let b=180
// console.log(b);




// 3.value assignement
      // Var keyword Reassing The Value
      // Let keyword Reassing The Value
      // Const keyword Cannot Reassing The Value



let a=25

console.log(a);
a=90
console.log(a);


// In Object const Value can Be Change The Value

const student={
    name:"kishor",
    gender:"male",
    City:"cuddalore"
}

console.table(student);
console.log(student.name);
student.name="Kishor Kumar"
console.log(student.name);


