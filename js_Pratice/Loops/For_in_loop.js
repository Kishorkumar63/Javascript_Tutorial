document.title="For In Loop"


//for in loop used print Object


const user={
    name:"kishor",
    age:20,
    gender:"male",
    Domain:"MERN Stack"
}
        //property Getting The key
for(let property in user)
{

//  console.log(property);
//     console.log(user[property]);
    console.log(property ,": ",user[property]);

}