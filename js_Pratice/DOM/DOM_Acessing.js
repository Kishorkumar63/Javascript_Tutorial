document.title = "DOM_ACCESING";

//======================================{ID}===========================
//"DOM_ACCESING  In ID"
const brand = document.getElementById("brand");
console.log(brand);

//element=1
console.log(brand.nodeType);
console.log(brand.nodeName);
brand.style.backgroundColor = "pink";

//========================================={Class}=======================
//"DOM_ACCESING  In Class"

// It IS HTML  COLLECTION Is Not Array But It One Of Type
// Only use For_Loop Not Use forEach() Loop
let stitle = document.getElementsByClassName("sub-title");
console.log(stitle);

// It Ouccur Error =>  stitle.style.color="red"

// Not Use forEach() Loop In HTML COLLECTION
// stitle.forEach(element => {
//     element.style.color="red"
// });

for (let i = 0; i < stitle.length; i++) {
  stitle[i].style.color = "yellow";
}

// stitle[0].style.color="black"

//============================================={Tag_Name}========================

// It Is HTML  COLLECTION Is Not Array But It One Of Type
let p = document.getElementsByTagName("p");
console.log(p);

for (let i = 0; i < p.length; i++) {
  p[i].style.color = "orange";
}

p[0].style.color = "gray";

//=========================================================={QUERYSEKECTOR}=================
// In MODER TERM USING TWO TYPE OF SELECTOR
// passing Tag Name ,ClassName ,Id
// It only Collect NodeObject
const heading = document.querySelector("h1");
console.log(heading);

//==========================================================={QUERYSELECTORALL}==================

//IT Selecting Multiple Elements

// It Return NodeList

//It using Foreach  Loop
let Qpara = document.querySelectorAll("p");

console.log(Qpara);

//=======================================Live Update  HTMl Collection Eg ===================

// const lst=document.getElementsByTagName("li")

// console.log(lst);
// console.log(lst.length);
// const li=document.createElement("li")
//  li.innerHTML="Kishor kumar"
//  li.style.backgroundColor="skyblue"
//  lst[0].parentElement.appendChild(li)
// console.log(lst.length);
// console.log(lst);

//=========================================== NodeList are static Eg ================================

//  const list=document.querySelectorAll("li")

//  console.log(list);
//   console.log(list.length);
// const li=document.createElement("li")
// li.innerHTML="DOM EG"
// li.style.backgroundColor="skyblue"
// list[0].parentElement.appendChild(li)
// // console.log(list.length);
// // console.log(list);
