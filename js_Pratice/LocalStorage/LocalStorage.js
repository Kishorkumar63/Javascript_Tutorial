const body=document.querySelector("body")

window.localStorage.setItem("name","Kishor Kumar")
window.localStorage.setItem("age",20)
window.localStorage.setItem("gender","Male")
const name=localStorage.getItem("name")

const h3 =document.createElement("h3");

h3.innerHTML=name;
body.appendChild(h3)
// localStorage.removeItem("name")
localStorage.clear()