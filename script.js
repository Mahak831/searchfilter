let users = [
  {
    name: "amisha rathod",
    pic: "https://images.unsplash.com/photo-1754910567873-91ae04195d61?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    bio: "silent chao in a loud world not for everyne",
  },
  {
    name: "rohan mehta",
    pic: "https://plus.unsplash.com/premium_photo-1755105194454-21564954e25e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    bio: "dream big, work hard, stay humble.",
  },
  {
    name: "isha verma",
    pic: "https://images.unsplash.com/photo-1755306064502-6df8d7ee33f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    bio: "lost in thoughts, found in music.",
  },
  {
    name: "arjun singh",
    pic: "https://images.unsplash.com/photo-1755282464678-31862372f805?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    bio: "living one day at a time, chasing sunsets.",
  },
  {
    name: "neha sharma",
    pic: "https://images.unsplash.com/photo-1755306064800-50206a7562f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    bio: "coffee in hand, ideas in mind.",
  },
  {
    name: "vikas rajput",
    pic: "https://images.unsplash.com/photo-1755264785187-021213668e14?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    bio: "coding my way through life’s errors.",
  },
  {
    name: "sanya kapoor",
    pic: "https://images.unsplash.com/photo-1637088660675-6930e63e51a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    bio: "book lover, story creator, daydream believer.",
  },
  {
    name: "manav joshi",
    pic: "https://images.unsplash.com/photo-1755299159442-26c68c07e042?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    bio: "exploring the chaos, finding peace.",
  }
];


function showUsers(arr){
  arr.forEach(function(user){
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);

    card.appendChild(content);
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);
let inp=document.querySelector(".inp");
inp.addEventListener("input",function(){
let newusers=users.filter((user)=>{
  return user.name.startsWith(inp.value);
}

);
document.querySelector(".cards").innerHTML="";
showUsers(newusers);
})