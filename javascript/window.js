/*function on()
{
   w = window.open("www.tutorjoes.in","newwindow",height=500,width=600);
w.moveTo(200,30);
w.focus();

}*/
/*
function off()
{
  k =  document.getElementsByClassName("q").innerHTML=navigator.cookieEnabled;
console.log(k);
k =  document.getElementsByClassName("q").innerHTML=navigator.appCodeName;
console.log(k);
k =  document.getElementsByClassName("q").innerHTML=navigator.userAgent;
console.log(k);
k =  document.getElementsByClassName("q").innerHTML=navigator.appVersion;
console.log(k);
k =  document.getElementsByClassName("q").innerHTML=navigator.onLine;
console.log(k);
k =  document.getElementsByClassName("q").innerHTML=navigator.product;
console.log(k);
k =  document.getElementsByClassName("q").innerHTML=navigator.platform;
console.log(k);

k =  document.getElementsByClassName("q").innerHTML=navigator.javaEnabled;
console.log(k);
k =  document.getElementsByClassName("q").innerHTML=navigator.language;
console.log(k);
}*/
/*

function on()
{
    var txt;
if(confirm("PRESSed Ok"))

{
    txt="pressed ok"
}
else{
    txt="you cancle"
}
document.getElementById("q").innerHTML=txt;
}*/
/*
function on()
{
    var txt;
    var person=prompt("ENTER YOUR NAME");
    if(person == null || person == "")
    {
        txt="PLEASE ENTER YOUR NAME !!"
    }
    else
    {
        txt=person;

    }
    document.getElementById("q").innerHTML=txt;
}*/
function on()
{

    var kk=0
   jj= setInterval(()=>{
        document.getElementById("q").innerHTML=kk++;
    },1000)
}
function off()
{
    clearTimeout(jj)
}