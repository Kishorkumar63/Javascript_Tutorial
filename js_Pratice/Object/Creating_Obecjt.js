window.document.title="Creating_Object";

//Creating Object in Javascript

// object creating in 4 types

//1.Using Object Literals
//2.using the object constructor
//3.using the Object.create() method
//4.Using Class


//1.Using Object Literals
// const person={
//     name:"john",
//     age:20,
//     job:"Developer"
// }

// console.log(person);


//2.using the object constructor


// const person =new Object()
// person.name="john";
// person.age=20
// person.gender="male"
// console.log(person);

//3.using the Object.create() method

//Object.create(prototype,propertiesObject);
// const personproto={
//     hello:function()
//     {
//         console.log(this.name);
//     }
// }
// const person=Object.create(personproto)
// person.name="kishor"
// person.age=20
// person.gender="male"
// person.hello()


//4.Using Class
class person{
    constructor(name,age,job)
    {
        this.name=name
        this.age=age
        this.job=job
    }
}

const persons=new person("Kishor",20,"Developer")
console.log(persons);