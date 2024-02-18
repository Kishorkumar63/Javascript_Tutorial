const days=document.querySelector("#days");
const  hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
const currentyear=new Date().getFullYear();
/*console.log(currentyear+1);*/

const newyear=new Date(`january 1 ${currentyear+1} 00:00:00`);/*hours minuet sec */
/*console.log(newyear);*/

function updatetime()
{


const currentdate=new Date();
/*console.log(currentdate);*/
const def =newyear-currentdate;
/*console.log(def);*/
const d=Math.floor(def/1000/60/60/24);
console.log(d);
const h=Math.floor((def/1000/60/60)%24);
/*console.log(h);*/
const m=Math.floor((def/1000/60)%60);
/*console.log(m);*/
const s=Math.floor((def/1000)%60);
/*console.log(s);*/
hours.innerHTML=h<10?"0"+h:h;

minutes.innerHTML=m<10?"0"+m:m;
days .innerHTML=d;

seconds.innerHTML=s;
}
setInterval(updatetime,1000);