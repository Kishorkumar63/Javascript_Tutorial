const API_KEY="e178cce5623166b299e476e5d24e13c8"



const Form=document.querySelector("form")
const inputtext=document.querySelector("input")
Form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    var datavalue=inputtext.value
  
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${datavalue}&appid=${API_KEY}`)
        const Data= await response.json()
        const {name,clouds,main}=Data
        console.log(name);
        console.log(clouds);
        console.log(main);
        console.log(main.humidity );
       
        

    
})



// const fetchData=async()=>{
// const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${datavalue}&appid=${API_KEY}`)
// const Data= await response.json()
// const {name,clouds,main}=Data
// console.log(name);
// }
