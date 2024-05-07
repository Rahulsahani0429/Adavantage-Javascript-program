let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ulist=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ulist.appendChild(item);
    
    // console.log(inp.value);
    inp.value=""; //this is use to reomve the task inside the placeholder
});
ulist.addEventListener("click",function(event){
    // console.log(event.target.nodeName);//nodeName is use to know the which type of tag we pressed;
    // console.log(event.target);//target is use to know the which button was press
    if(event.target.nodeName=="BUTTON"){  
    console.log("delete")
    }
    else{
        console.log("don't delete");
    }
    
    // console.log("button clicked");
})