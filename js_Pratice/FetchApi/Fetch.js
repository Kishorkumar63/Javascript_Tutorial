document.title="Fetch Api"

const textOutput=document.querySelector("#txt-output")
const btntext=document.querySelector("#txt-btn")

btntext.addEventListener("click",gettextFile)

function gettextFile()
{                                  //normal text you give readable method like=>text()
    fetch("Fetch.txt").then((res)=>res.text()).then((data)=>{
        textOutput.innerHTML=data
    })
}

//=================================fetch json=============


const jsonOutput=document.querySelector("#json-output")
const btnJson=document.querySelector("#btn-json")

btnJson.addEventListener("click",getJsonData)


async function getJsonData()
{
    await fetch("Fetch.json").then((res)=>res.json()).then((kk)=>{

        let data="<ul>"

      kk.forEach(user => {
        data+=`<li> ${user.firtName}</li>`
      });
        data+="</ul>"
        jsonOutput.innerHTML=data
    })
}

//https://jsonplaceholder.typicode.com/posts

const Outputapi=document.querySelector("#api-output")
const btnApi=document.querySelector("#btn-api")


btnApi.addEventListener("click",fetchApi)


async function fetchApi(){
const response=await fetch("https://jsonplaceholder.typicode.com/posts")
const jsonData=await response.json()
console.log(jsonData);
let output="";
jsonData.forEach((post)=>{
    output+=`<div class="post>
    
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    
    </div>`
})
Outputapi.innerHTML=output

}