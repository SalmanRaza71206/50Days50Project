const progress = document.querySelectorAll(".count")
const spanclass = document.querySelectorAll(".spanclass")
// console.log(progress)
const Next = document.getElementById("Next")
const Prev = document.getElementById("Prev")
let progresscount=1;
localStorage.setItem("i",progresscount)
Next.addEventListener("click",()=>{
    
      progress[localStorage.getItem("i")].classList.add("active") 
      Next.disabled=false
      spanclass[localStorage.getItem("i")-1].classList.add("actiive")
    //   console.log(progresscount-1)
      if(progresscount<progress.length-1){
        
        progresscount++;
        localStorage.setItem("i",progresscount) 
      }
     else{
      Next.disabled=true
     }
      
    }
)
Prev.addEventListener("click",()=>
{
    progress[localStorage.getItem("i")].classList.remove("active")
    Prev.disabled=false
    spanclass[localStorage.getItem("i")-1].classList.remove("actiive")
    if(progresscount>1){
        // Prev.disabled=false
    progresscount--;
    localStorage.setItem("i",progresscount) 
}
else{
    Prev.disabled=true
}
})
