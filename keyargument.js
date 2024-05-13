let int=document.querySelector("input");
int.addEventListener("keydown",function(evet){
    console.log("key",evet.key);
     console.log("code",evet.code);
     console.log("key was press");
});