let slideposition=0;
const sliders=document.querySelectorAll(".slider-item");
const totalslider=sliders.length;
const btnprev=document.querySelector("#btn-prev");
const btnnext=document.querySelector("#btn-next");
btnprev.addEventListener("click",function(){
    prevslide();
})
btnnext.addEventListener("click",function(){
    nextslide();
})