const container = document.querySelector(".container");


//Create 16 divs
for(let n=0; n<16; n++){
    for (let i=0; i<16; i++){
        const div = document.createElement("div");
        div.classList.add("div");
        container.appendChild(div);
    }
}


//Select the div via querySelector
document.querySelectorAll(".div").forEach(item => {
    //detects when the cursor hovers over a div
    item.addEventListener("mouseover", event =>{
        //Changes the div to black
        item.setAttribute("style", "background-color:black");
    });
    
});



