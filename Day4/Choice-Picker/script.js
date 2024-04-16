const textarea1 = document.getElementById("textarea")
const picker = document.getElementsByClassName("add-data")

let para=document.createElement("li")
picker[0].appendChild(para);
textarea1.addEventListener("input",(e)=>{
 const datavalue =e.target.value
  const key=e.data
  console.log(key,"ye key h");

  const innta = datavalue.split("")
  console.log(datavalue);
  addingdata(key)
     })
    
    
    
     function addingdata( key) {
      if(key == null){
        
       removePara(para)
      }
     else if (key.includes(",")) {
  
        para = document.createElement("li");
        picker[0].appendChild(para);

      } else {
        
        if (key.length > 0) {
        
          para.innerText += key;
       
        }
      }
    }

    
    
    function removePara(para){
      let value = para.innerText
      let arrValue = value.split('')
      // console.log(arrValue[(arrValue.length)-1])
      
        let i = 1;
        while(i==1){
          let textContent = para.innerText;
          console.log(textContent);
          textContent = textContent.slice(0, textContent.lastIndexOf(arrValue[arrValue.length - 1]));
          para.innerText = textContent;
            i++
        }
    }
