let arr=document.querySelector("input");
arr.addEventListener("keydown",function(event){
    console.log("code =",event.code);
    if(event.code=="keyU"){
        console.log("move to upward");
    }
     else if(event.code=="ArrowDown"){
        console.log("move to backward");
    }
     else if(event.code=="Arrowright"){
        console.log("move to ritht");
    }
     else if(event.code=="ArrowLeft"){
        console.log("move to left");
    }
    
});