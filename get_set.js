class getset{
    constructor(name){
        this._name=name

    }
    fry(){
        alert(" i am flyb in the sky")
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name=newName
    }
}

let object=new getset("Birds")
object.fry()

console.log(object.name)

object.name="pickock"

console.log(object.name)
let c=745;


console.log(object instanceof getset)//instanceof is use to check the character is inside or not
console.log(c instanceof getset);