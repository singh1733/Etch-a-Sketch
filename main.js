
const divHolder=document.createElement(div);
div.classList.add("row");
div.setAttribute("style", "display:flex");
for (let i=0;i<=16;i++){
    const div=document.createElement(div);
    div.classList.add("single");
    div.setAttribute("style", "border-style: solid");
    divHolder.appendChild(div);
}