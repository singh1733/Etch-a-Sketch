const divcontainer=document.querySelector("div.container");
divcontainer.setAttribute("style", "display:flex; flex-direction: column; margin: 0; padding:0;");

const baseSize = 'min(100vw, 100vh)'; // Use the smaller of the viewport width or height
divcontainer.style.width = baseSize;
divcontainer.style.height = baseSize;

document.body.setAttribute("style", "display:flex; justify-content:center; min-height: 100vh;margin: 0px; padding: 0px;");

for (let j=0;j<16;j++){
const divHolder=document.createElement("div");
divHolder.classList.add("row");
divHolder.setAttribute("style", "height: calc(100% / 16); width: 100%; display: flex;");
for (let i=0;i<16;i++){
    const div=document.createElement("div");
    div.classList.add("single");
    div.setAttribute("style", "border-style: solid;aspect-ratio: 1/1;flex: 1;");
    divHolder.appendChild(div);
}
divcontainer.appendChild(divHolder);
}