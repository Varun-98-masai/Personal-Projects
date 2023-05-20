let name = {
    firstName: "Varun",
    lastName: "Jatav",
    
}
  let printFullName = function(homeTown , state) {
    console.log(this.firstName + " " + this.lastName + " " + homeTown +" , "+ state);
  }
printFullName.call(name , "Jhansi", "U.P");

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}
// funcion borrowing
printFullName.call(name2, "Mumbai", "Maharashtra");

// Apply
console.log("Apply Method");
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// Bind
let printMyName = printFullName.bind(name , "Jhansi", "U.P");

console.log("Bind Method" , printMyName);
printMyName();