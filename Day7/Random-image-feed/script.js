const url = "https://source.unsplash.com/random/"
const container = document.querySelector("#image-container")
console.log(container,"mai");
const max = 20

function random(){
    const rand = Math.floor(Math.random()*10 + max)
  return rand
}

for(let i=0; i<max; i++){
    const img=document.createElement("img")
    console.log(img);
    img.src=`${url}${random()}`
   container.appendChild(img)
}