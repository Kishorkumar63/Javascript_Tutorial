document.title = "Call_Bind_Apply";





//======================================Call()===========================
// function kishor() {
//   console.log(this);
// }

// Pre Defined parameter In function
/*arguments:null
caller: null
length:0
name: "kishor"
*/
// console.log(kishor.name);
// console.log(kishor.toString());
// kishor();
// kishor.call();


function welcome()
{
    console.log("Welcome",this.user_name);
}


const user={
    user_name:"Kishor Kumar"
}

//passing Obejct in argument in call() passing mutliple parameter
welcome.call(user)

function total(eng,mat)
{
    console.log(this.user_name,"Got",(eng+mat),"Marks");
}
total.call(user,90,89)



//===============================================apply()=====================
//passing array[] ,Obeject={}

const sub=[90,89]
function total(eng,mat)
{
    console.log(this.user_name,"Got",(eng+mat),"Marks");
}

total.apply(user,sub)


//===================================================Bind()====================

//bind Can be assign function In variabel
const fun=total.bind(user,90,90)

console.log(fun);
fun()

