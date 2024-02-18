const imgs=document.querySelectorAll(".img a");
let imgid=1;
imgs.forEach((img)=>{
    img.addEventListener("click",(e)=>{
        e.preventDefault();
        imgid=img.dataset.id;
        console.log(imgid);
        moveImage();

    })
})
function  moveImage()
{
    const imgwidth=document.querySelector(".main-image img:first-child").clientWidth;
    let width=(imgid-1)*imgwidth;
    console.log(width);
   document.querySelector(".main-image").style.transform=`translateX(${-width}px)`;
  // imgframe.style.transform=` translateX(${-width}px); `
    
}
