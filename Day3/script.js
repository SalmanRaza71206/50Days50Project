const teamA= document.getElementById("TeamA")
const teamB= document.getElementById("TeamB")
const score1=document.getElementById("score1")
const score2=document.getElementById("score2")

let count1=score1.dataset.count
localStorage.setItem("count1",count1)

let count2=score2.dataset.count
localStorage.setItem("count2",count2)


teamA.addEventListener("click",()=>{
    let currcount=localStorage.getItem("count1")
increaseCount(currcount,count1)
})
teamB.addEventListener("click",()=>{
    let currcount=localStorage.getItem("count2")
    increaseCount()
    })
function increaseCount(currcount){
   
    score1.innerText= ++currcount
    // console.log(count)
    localStorage.setItem("count1",currcount)
}