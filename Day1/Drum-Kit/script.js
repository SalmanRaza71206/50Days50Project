
// const keypress= document.querySelectorAll(".piano-key")
// window.addEventListener("keydown",(e)=>{

// keypress.forEach((key)=>{
//     let variable = key.firstChild.textContent.trim(); 

// if(variable==e.key.toUpperCase()){
//     const audio= document.querySelector("audio")
//     audio.play() 
// }


// })
// })
window.addEventListener("keydown", (e) => {
    const keyPressed = e.key.toUpperCase();
    const keyElements = document.querySelectorAll('.piano-key');

    for (let i = 0; i < keyElements.length; i++) {
        const keyText = keyElements[i].firstChild.data.trim();
        console.log(keyText, "inner")
        if (keyText === keyPressed) {
            const audio = keyElements[i].lastElementChild
            audio.play()
        break;
        }

    }

});