const space = document.getElementById("space")
const blur = document.getElementById("blur")
const color = document.getElementById("color")
const image= document.getElementById("image-container")
const img = document.getElementsByTagName("img")[0]
console.log(img);
// for padding
space.addEventListener("input",(e)=>{
    const data = e.target.value *10;
    console.log(data);
    image.style.padding = `${data}px`
    
})

// for background color
color.addEventListener("input",(e)=>{
    const colordata= e.target.value
  image.style.backgroundColor=`${colordata}`
})

// blur of image
blur.addEventListener("input",(e)=>{
     const blurvalue = e.target.value;
     console.log(blurvalue);
     img.style.filter=`blur(${blurvalue}px)`
})