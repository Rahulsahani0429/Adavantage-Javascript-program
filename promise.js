let r1=new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve("value unsucessfull");
    },2000);
});
let r2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2");
        // reject(new Error("Error"));
    },5000);
});
let r3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value4");
    },3000);
});
// r1.catch((unsucessfull)=>{
//     console.log(unsucessfull);
// })
// r2.then((value)=>{
//     console.log(value);
// })
// r3.then((value)=>{
//     console.log(value);
// })
// let Promise_all=Promise.all([r1,r2,r3])
// let Promise_all=Promise.race([r1,r2,r3])
let Promise_all=Promise.any([r1,r2,r3])
// let Promise_all=Promise.all([r1,r2,r3])
// let Promise_all=Promise.all([r1,r2,r3])
Promise_all.then((value)=>{
 console.log(value);
});