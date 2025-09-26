let form = document.querySelector("form");
let inp = document.querySelectorAll("input")
let cardbox = document.querySelector("#card")

form.addEventListener("submit",function(dels){
    dels.preventDefault()
    if(inp[0].value === "" || inp[1].value === "" || inp[2].value === "" || inp[3].value === "" ){
       alert("add the details below");
       return;
    }
    let card = document.createElement("div");
    card.classList.add("card");
    let h1 = document.createElement("h1")
    h1.classList.add("name");
    h1.textContent = inp[0].value;
    let img = document.createElement("img")
    img.setAttribute("src",inp[1].value);
    let h3 = document.createElement("h3")
    h3.classList.add("pro");
    h3.textContent = inp[2].value;
    let h5 = document.createElement("h5")
    h5.classList.add("bio");
    h5.textContent = inp[3].value;
    card.appendChild(h1)
    card.appendChild(img)
    card.appendChild(h3)
    card.appendChild(h5)
    cardbox.appendChild(card)
    inp[0].value = "";
    inp[1].value = "";
    inp[2].value = "";
    inp[3].value = "";
    
    
    

})