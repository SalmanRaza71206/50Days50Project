const GITURL = "https://api.github.com/users/"

const inputted= document.querySelector("input")
const container = document.getElementById("container")

inputted.addEventListener("change", (e) => {
    const data = e.target.value
    call(data);
})

// calling github api
const call = async (data) => {
    try {
        const res = await fetch(GITURL + data);
        if (res.status == 200) {
            const output = await res.json()

            makecard(output)
        }
        else {
            console.log("error")
        }

    }

    catch (error) {
        console.log("something went wrong", error);
    }

}

// making the card of user
function makecard(output) {
    const usercontainer = document.createElement("div")
    usercontainer.classList.add("user-container")
    
     const userside =document.createElement("div")
      userside.classList.add("user-side")

      const contri = document.createElement("div")
      contri.classList.add("contri")

    const img =document.createElement("img")
     img.classList.add("image")
     img.src=output.avatar_url
     

     const username = document.createElement("span")
    username.classList.add("title")
    username.innerText=output.name ? output.name :"Null"

    const bios = document.createElement("span")
    bios.classList.add("bios")
    bios.innerText=output.bio? output.bio : "nothing in bios"
    
    const follow =document.createElement("span")
    follow.classList.add("follower")
    follow.innerText = output.followers ? output.followers + " "+ "Followers" : "No followers found";

 const getfollowing =document.createElement("span")
 getfollowing.classList.add("follower")
 getfollowing.innerText = output.following ? output.following +" "+ "Following" : " No following found";

 const getrepos = document.createElement("span")
 getrepos.classList.add("follower")
 getrepos.innerText = output.public_repos ? output.public_repos + " " + "Repos" : "No Repos Found"


//  console.log(container.c)
const existingContainer = container.querySelector('.user-container');
if (existingContainer) {
    container.removeChild(existingContainer); 
}
  
    container.appendChild(usercontainer)
    contri.append(follow,getfollowing,getrepos)
    userside.append(username,bios,contri)
    usercontainer.append(img,userside)

}
