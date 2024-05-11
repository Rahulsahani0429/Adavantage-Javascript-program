let extract=document.querySelector("form");
extract.addEventListener("submit",function(event){
    event.preventDefault();//this is use to can't go to the link
    // let inp=document.querySelector("input");
    // console.log(inp);//this is use to access the input value
    // console.dir(inp);//this is use to access the object value
    // console.log(inp.value); //this is use to access the innertext value use inp.value
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
});