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



function gridProducer() {
    divcontainer.innerHTML = "";
    for (let j = 0; j < gridDim; j++) {

        const divHolder = document.createElement("div");
        divHolder.classList.add("row");
        divHolder.setAttribute("style", "height: calc(100% /" + gridDim + "); width: 100%; display: flex;");
        for (let i = 0; i < gridDim; i++) {
            const div = document.createElement("div");
            div.classList.add("single");
            div.setAttribute("style", "border-style: solid;aspect-ratio: 1/1;flex: 1;");
            div.style.backgroundColor = "white";
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "rgb(";
            });
            divHolder.appendChild(div);
        }
        divcontainer.appendChild(divHolder);
    }
}


