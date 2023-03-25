let nums=document.querySelectorAll(".h2Num");
let sec=document.querySelector(".sec13");
let started=false;

window.onscroll =function(){
  if(window.scrollY >= sec.offsetTop){
    if(!started){
      nums.forEach((wl)=>start(wl))
    }
    started = true;
  }
}

function start(el){
  let goll=el.dataset.goll;
  let con = setInterval(()=>{
  el.textContent++;
  if(el.textContent ==goll){
    clearInterval(con)
  }
  },2000 / goll )
}

let deats= new Date("May 25 2023 23:59:59").getTime();
console.log(deats);
let cont =setInterval(()=>{
  let newDate=new Date().getTime();
  let times=deats-newDate;
  let day=Math.floor(times / (1000*60*60*24));
  let hours=Math.floor((times % (1000*60*60*24)) / (1000*60*60));
  let minutes=Math.floor((times % (1000*60*60)) / (1000*60));
  let seconds=Math.floor((times % (1000*60)) / 1000);
  document.querySelector(".Days").innerHTML=`${day} <span>Days</span>`;
  document.querySelector(".Hours").innerHTML=`${hours} <span>Hours</span>`;
  document.querySelector(".Minutes").innerHTML=`${minutes} <span>Minutes</span>`;
  document.querySelector(".Seconds").innerHTML=`${seconds} <span>Seconds</span>`;
  if(times <= 0){
    clearInterval(cont);
  }
},1000)