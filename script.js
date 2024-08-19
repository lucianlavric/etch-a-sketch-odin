const container = document.querySelector(".container");

function createGrid(input){
    //Removes the old grid.
    while(container.firstElementChild){
        container.firstElementChild.remove();
    }
    
    //Creates a new grid based on the user input
    for(let n=0; n<input * input; n++){
            const div = document.createElement("div");
            div.classList.add("div");
            //Calculates the height and width of each 
            //individual div based on the set container size
            let newDivSize = 480 / input;
            //Changes the div "height" and "weight" CSS properties to containerSize
            div.style.height = newDivSize + "px"; 
            div.style.width = newDivSize + "px";
            container.appendChild(div);
    }

    //Attach the event listeners to the new grid.
    attachHoverListeners();
}

//Initializes the createGrid function with our starting size of 16.
createGrid(16);

const dimensionsBtn = document.querySelector("button")

//Prompts user to enter new grid size.
dimensionsBtn.addEventListener("click", () =>{
    let userInput = prompt("Please input the number of squares per side you would like\n(Values larger than 100 will default to 10)");
    if (userInput > 100){
        userInput = 10;
    }
    createGrid(parseInt(userInput));
})

function attachHoverListeners(){
    //Select the div via querySelector
        document.querySelectorAll(".div").forEach(item => {
            //detects when the cursor hovers over a div
            item.addEventListener("mouseover", ()=>{
                //Changes the div to black
                item.style.backgroundColor = "black";
            });
            
        });
    }