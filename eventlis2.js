let head=document.querySelector("h1");
let para=document.querySelector("p");
let butt=document.querySelector("button");
function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor="green";
}
head.addEventListener("click",changecolor);
para.addEventListener("click",changecolor);
butt.addEventListener("click",changecolor);
