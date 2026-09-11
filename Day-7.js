// Question 1
// Create an object called car 

let car = {
    brand: "Toyota",
    model: "Fortune",
    year: 2024,
    color: "White"
}

console.log(car.brand);
car.year = 2025;
car.price = 2340000;
delete car.color;
console.log(car);



// Question 2
//Create an object called student with : name , age , course 

let student = {
    name: "Rohan",
    age: 22,
    course: "MCA",

    introduce :function() {
        console.log(`My name is ${this.name}. I am ${this.age} years old and I am studying ${this.course}.`)
    } 
};

student.introduce();



