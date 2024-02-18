let slideposition=0;
const sliders=document.querySelectorAll(".slider-item");
const totalslider=sliders.length;
const btnprev=document.querySelector("#btn-prev");
const btnnext=document.querySelector("#btn-next");
btnprev.addEventListener("click",function(){
    prevslide();
    
});
btnnext.addEventListener("click",function(){
    nextslide();
});
function updateposition()
{
    sliders.forEach(slide=>{
        slide.classList.remove("active");
        slide.classList.add("hidden");  
    });
    sliders[slideposition].classList.add("active");
}
function prevslide(){
    if(slideposition==0)/* */
    {
        slideposition=totalslider-1;
        
    }
    else
    {
        slideposition--;
    }

updateposition();
}
function nextslide()
{
    if(slideposition==totalslider-1)/* */
    {
        slideposition=0;
    }
    else
    {
        slideposition++;
    }
  
    updateposition();

}
//setInterval(()=>{
/*if(slideposition==totalslider-1)
{
    slideposition=0;
}
else
{
    slideposition++;
}*/
/*
if(slideposition==0)
    {
        slideposition=totalslider-1;
        
    }
    else
    {
        slideposition--;
    }
updateposition();
},2000)*/