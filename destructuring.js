let arr=[84,3,53,25,4,65,2]
//let [r,g,h, d, ...rest]=arr;//we can define the destructuring like that
//console.log( r,g,h,d, rest) 
let [,b,x,...rest]=arr;
console.log(b,x,rest)
// for key and index value show it 
let arr1=[3,5,12]
let obj1={ ...arr1}
console.log(obj1)
//adding the deconstructor
function sum( m,n,y)
{
    return m + n + y
}

console.log(sum(...arr1))

let obj2={
    name:"rahul",
    company:"company LNT",
    address:"siwan 841287"

}
console.log({...obj2, name:"manish", company:"ABC"})//in the obj2 fuction will change acording to the program
console.log({ name:"manish", company:"ABC", ...obj2})//in this obj2 function will not change