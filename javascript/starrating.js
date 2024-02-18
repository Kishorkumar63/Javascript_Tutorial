const stars=document.querySelectorAll(".star");
const current_rating=document.querySelector(".currentrating")

stars.forEach((star,index)=>{
    // current_rating.innerHTML=`${index+1} out of 5`
    star.addEventListener("click",()=>{
        let current_star=index+1;
        current_rating.innerHTML=`${current_star} out of 5`;


        stars.forEach((star,i)=>{
if(current_star>=i+1)
{
    star.innerHTML="&#9733;"/* filled Star */
}
else{
    star.innerHTML='&#9734;';/* outline Star */
}
        })
    })
})