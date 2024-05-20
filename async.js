async function greet(){
    return "hello manish"
}
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was:",result)

})
.catch((err)=>{
    console.log("promise was rejected with err" ,err);
}
)