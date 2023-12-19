document.title="For_Of_Loop"

const names=["kishor","yokesh","praveen","jagan","Dinesh","Anbu","Vel"]

for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}

// For of Loop is without array length() we print Value

console.log("For Of Loop");
for (let name of names)
{
console.log(name);
}