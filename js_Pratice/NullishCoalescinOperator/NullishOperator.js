document.title="NullishCoalescingOperator"

//NullishCoalescingOperator (??)


const name=null??"kishor"
console.log(name);

const b=34??25
console.log(b);

//??=  used object type variable


const user={
    name:"kishor"
}
console.log(user);
console.log(user.name);
user.city??="Cuddalore"
console.log(user.city);
