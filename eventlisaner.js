let btn=document.querySelector("button");
let heading=document.querySelector("h1");
let paragraph=document.querySelector("p");
btn.addEventListener("click",function(){
    // console.log(this);
    // console.dir is use to the know about the all button properties
    // console.dir(this);
    console.log(this.innerText); // this is use to know about the inside the html content
    this.style.backgroundColor="blue";
    this.style.color="white";
    this.style.fontSize="30px";
    this.style.textAlign="center";
});

heading.addEventListener("click",function(){
   
    console.log(this.innerText); // this is use to know about the inside the html content
    this.style.backgroundColor="hotpink";
    this.style.color="white";
    this.style.fontSize="30px";
    this.style.textAlign="center";
});
paragraph.addEventListener("click",function(){
    
    console.log(this.innerText); // this is use to know about the inside the html content
    this.style.backgroundColor="red";
    this.style.color="white";
    this.style.fontSize="30px";
    this.style.textAlign="center";
});