const container = document.querySelector(".container");


//Create 16 divs
for(let n=0; n<16; n++){
    for (let i=0; i<16; i++){
        const div = document.createElement("div");
        div.classList.add("div");
        container.appendChild(div);
    }
}
