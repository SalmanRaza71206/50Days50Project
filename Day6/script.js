const container = document.getElementsByClassName("text-content")
const Text= "We Love Programming"
const input = document.getElementById("speed")
const inner = Text.split("") 
let intervalid
let i=0;
let speed=1000;
time()
input.addEventListener("input",(e)=>{
  speed=e.target.value
  speed = 2000/speed
  clearInterval(intervalid)
time()
})


function time(){
intervalid = setInterval(() => {
    container[0].textContent +=inner[i]
    i++;
    if(i>inner.length-1){
      i=0;
      container[0].textContent =""
    }
    
},speed);
}