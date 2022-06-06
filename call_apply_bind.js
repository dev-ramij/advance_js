const name1 = {
    firstName:"Ramij",
    lastName:"Raj",
    printName:function(){
        console.log(this.firstName + " " + this.lastName)
    }
}

name1.printName(); // Ramij Raj

const name2 = {
    firstName: "John",
    lastName: "Doe"
}

// function borrowing
// when we call call method then this refers to name2 object
name1.printName.call(name2) // John Doe

// second case
const name3 = {
    firstName: "Akshay",
    lastName:"Saini"
}

const printName = function(hometown,country) {
    console.log(this.firstName+ " " + this.lastName + " from " + hometown + " , " + country)
}

// first arg will be the object and second will be parameter
printName.call(name3,"Kolkata","India") // Akshay Shaini

// only difference of call and apply
// in apply we pass the arguments as an array
printName.apply(name3,["Kolkata","India"])

// We can use bind method to store it as a function
// Here printAkshay store the new generated function rather calling it
const printAkshay = printName.bind(name3,"Kolkata","India")
printAkshay();
