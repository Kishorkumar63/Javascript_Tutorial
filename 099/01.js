var btn = document.querySelector(".ham");
var nv = document.querySelector(".ttf");
btn.addEventListener("click", () => {
    nv.classList.toggle("slide");
})
var art = document.querySelector("#cart");
var ad = document.querySelector(".side-cart");
art.addEventListener('click', () => {
    ad.classList.add("co");

})
var Remove = document.querySelector(".oo");
Remove.addEventListener('click', () => {
    ad.classList.remove("co")
})

let addcart=document.querySelectorAll(".ic-2");
addcart.forEach((get)=>{
    get.addEventListener("click",crt)
})
function crt()
{
    let box=this.parentElement;
    let rate=box.querySelector(".title").innerHTML;
    let src=box.querySelector(".img").innerHTML;
    console.log(src);
    let para=box.querySelector(".p").innerHTML;
    console.log(para);
}
var ve=document.querySelector("#veg");
var ttf=document.createElement("div");
ttf.innerText="kishor"
ttf.id="uu";

ve.appendChild(ttf);

