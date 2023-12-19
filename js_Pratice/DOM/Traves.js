const para = document.getElementsByTagName("p");
const heding = document.getElementsByTagName("h1");

console.log(para);

const parent = para[0].parentNode;
console.log(parent);
parent.style.backgroundColor = "pink";

console.log(heding);

const head=heding[1].parentElement
console.log(head);

head.style.backgroundColor="red"
