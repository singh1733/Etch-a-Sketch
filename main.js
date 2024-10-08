const divcontainer = document.querySelector("div.container");
divcontainer.setAttribute("style", "display:flex; flex-direction: column; margin: 0; padding:0;");

const baseSize = 'min(75vw, 75vh)'; // Use the smaller of the viewport width or height
divcontainer.style.width = baseSize;
divcontainer.style.height = baseSize;

let gridDim = 16;
gridProducer();
const button = document.createElement("button");
button.textContent = "Set Size";
button.addEventListener("click", () => {
    gridDim = -1;
    while (gridDim < 0 || gridDim > 100) {
        gridDim = prompt("Enter a number 1-100 for dimensions of the grid");
    }
    gridProducer();
});

document.body.insertBefore(button, divcontainer);

document.body.setAttribute("style", "display:flex; align-items:center; min-height: 100vh;margin: 0px; padding: 0px; flex-direction:column;justify-content:center; background-color: #9EA1D4;");


function randomColor() {
    let letters = "1234567890ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16.9)];
    }
    return color;
}

function gridProducer() {
    divcontainer.innerHTML = "";
    for (let j = 0; j < gridDim; j++) {

        const divHolder = document.createElement("div");
        divHolder.classList.add("row");
        divHolder.setAttribute("style", "height: calc(100% /" + gridDim + "); width: 100%; display: flex;");
        for (let i = 0; i < gridDim; i++) {
            let interaction = 0;
            const div = document.createElement("div");
            div.classList.add("single");
            div.setAttribute("style", "border-style: solid;aspect-ratio: 1/1;flex: 1;");
            div.style.backgroundColor = "white";
            let interactions=0;
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
            div.addEventListener("mouseenter", () => {
                interactions++;
                darkenedRandRed=randomR*(1-.1*interactions);
                darkenedRandGreen=randomG*(1-.1*interactions);
                darkenedRandBlue=randomB*(1-.1*interactions);
                div.style.backgroundColor = `rgb(${darkenedRandRed}, ${darkenedRandGreen}, ${darkenedRandBlue})`;
                if (interactions==10){
                    interactions=0;
                    randomR = Math.floor(Math.random() * 256);
                    randomG = Math.floor(Math.random() * 256);
                    randomB = Math.floor(Math.random() * 256);
                }
            });


            divHolder.appendChild(div);
        }
        divcontainer.appendChild(divHolder);
    }
}


