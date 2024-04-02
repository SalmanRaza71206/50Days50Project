const expandimg = document.querySelectorAll(".expand");

for(let i=0;i<expandimg.length;i++){
expandimg[i].addEventListener("click",()=>{
    var current = document.getElementsByClassName("active");
    console.log(current)
  if (current.length >0) { 
    current[0].className=current[0].className.replace("active", "expand");
  }

  expandimg[i].classList.add("active")
})
}
// expandimg.forEach(innerelem => {
//     innerelem.addEventListener("click", () => {
//         removeclasslist()
//         innerelem.classList.add("active")
//     })
// })

// function removeclasslist() {
//     expandimg.forEach(innerelem => {
//         innerelem.classList.remove("active")
//     })
// }