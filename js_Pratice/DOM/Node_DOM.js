//FirstChild
const div = document.getElementsByTagName("div");
const head = document.getElementsByTagName("h1");
const parent = div[0];
const firstChild = parent.firstChild;
console.log(firstChild);

//LastChild
const lastChild = parent.lastChild;
console.log(lastChild);

//Element

const firstElement = parent.firstElementChild;

console.log(firstElement);
const lastElement = parent.lastElementChild;

console.log(lastElement);

//FirstChild

const fc = head[0].firstChild;
console.log(fc);

//FirstChild
const LC = head[0].lastChild;

console.log(LC);



//children
console.log(parent.children[0]);
console.log(parent.children[1]);
