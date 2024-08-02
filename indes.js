let key=prompt("enter the key you want to take");
let value=prompt("enter the value you want to take");
localStorage.setItem(key,value);
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)