const h = document.querySelectorAll(".h");
const m = document.querySelectorAll(".m");
const s = document.querySelectorAll(".s");
const span = document.querySelectorAll(".meridian span");
const days_span = document.querySelectorAll(".days span");
const month_span = document.querySelectorAll(".month span");
const date = document.querySelector(".date");

function runclock() {
  var time = new Date();
  //set Date
  var da = time.getDate();
  da = da < 10 ? "0" + da : da;
  var mo = time.getMonth() + 1;
  //month are print in array method starting value 0
  mo = mo < 10 ? "0" + mo : mo;

  var ye = time.getFullYear();
  //   console.log(da, mo, ye);
  date.innerHTML = `${da}-${mo}-${ye}`;

  //set Day
  //console.log("Days  are print in array Method starting value 0 :",time.getDay());
  days_span[time.getDay()].classList.add("day-active");
  //days_Span[0,1,2,3,4,5,6]

  //set month
  // console.log(time.getMonth()+1);
  month_span[time.getMonth()].classList.add("day-active");

  //Set Time

  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  if (hrs >= 12) {
    //hrs=13
    //13-12=1
    //hrs=12
    //12-12=0
    hrs = hrs - 12;
    span[1].classList.add("active");
  } else {
    if (hrs === 0) {
      hrs = 12;
    }
    span[0].classList.add("active");
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  //   console.log(hrs,min,sec);
  hrs = hrs.toString();
  min = min.toString();
  sec = sec.toString();
  console.log(hrs, min, sec);

  h[0].innerHTML = hrs[0];
  h[1].innerHTML = hrs[1];

  m[0].innerHTML = min[0];
  m[1].innerHTML = min[1];

  s[0].innerHTML = sec[0];
  s[1].innerHTML = sec[1];
}
setInterval(runclock, 1000);
