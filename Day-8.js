// --------- 1. Object Methods----------

// let student = {
//     name: "Sandhya",
//     age: 23,
//     course: "MCA"
// };

// console.log(student.name);
// console.log(student.age);







// --------- 2. Object.keys()----------

// let student = {
//     name: "Sandhya",
//     age: 23,
//     course: "MCA"
// };

// console.log(Object.keys(student));









// --------- 3. Object.values() ----------

// let student = {
//     name: "Sandhya",
//     age: 23,
//     course: "MCA"
// };

// console.log(Object.values(student));









// --------- 4. Object.entries() ----------

// let student = {
//     name: "Sandhya",
//     age: 23,
//     course: "MCA"
// };
// console.log(Object.entries(student));

// for(let [key, value] of Object.entries(student)){
//     console.log(key, value);
// }










// --------- 5. hasOwnProperty() ----------

// let student = {
//     name: "Sandhya",
//     age: 23
// };

// console.log(student.hasOwnProperty("name"));
// console.log(student.hasOwnProperty("marks"));










// --------- 6. Nested Objects ------------
// let student = {
//     name: "Sandhya",
//     age: 23,

//     address: {
//         city: "Dehradun",
//         state: "Uttarakhand",
//         country: "India"
//     }
// };
// console.log(student.address.city);
// console.log(student.address.state);













// --------- 7. Objects Containing Arrays ----------

// let student = {
//     name: "Sandhya",
//     skills: ["HTML", "CSS", "JavaScript", "React"]
// };

// console.log(student.skills);
// console.log(student.skills[2]);











// ------------- 8. Arrays Containing Objects --------------
// let students = [
//     {
//         name: "Aman",
//         age: 22
//     },

//     {
//         name: "Priya",
//         age: 23
//     },

//     {
//         name: "Rahul",
//         age: 24
//     }
// ];
// console.log(students[0].name);
// console.log(students[2].age);









// ------------- 9. Array of Objects + map() ----------------

// let students = [
//     { name: "Aman", age: 22 },
//     { name: "Priya", age: 23 },
//     { name: "Rahul", age: 24 }
// ];

// let names = students.map(function(student){
//     return student.name;
// });

// console.log(names);







// ------------- 10. Array of Objects + `filter()` --------------

//  let students = [
//     { name: "Aman", age: 22 },
//     { name: "Priya", age: 23 },
//     { name: "Rahul", age: 24 }
// ];

// let ages = students.filter(student=> student.age > 22);
// console.log(ages);









// ------------- 11. Object Destructuring  --------------

// let student = {
//     name: "Sandhya",
//     age: 23,
//     course: "MCA"
// };

// let { name, age, course } = student;

// console.log(name);
// console.log(age);
// console.log(course);










// ------------- 12. Renaming During Destructuring --------------

// let student = {
//     name: "Sandhya",
//     age: 23
// };

// let { name: studentName, age: studentAge } = student;

// console.log(studentName);
// console.log(studentAge);








// ------------- 13. Array Destructuring --------------

// let numbers = [10, 20, 30];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

// let [a, b, c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);










// ------------- 14. Spread Operator `...` --------------

// let numbers = [1, 2, 3];     //Spread 
// console.log(...numbers);

// function add(...numbers){   //Rest
//     console.log(numbers);
// }

// add(10, 20, 30, 40);













/* ================================
        📝 Day 8 Practice
================================== */

// 1.  all key , - all value , - all key-value pairs` 


// let employee = {
//     name: "Riya",
//     age: 25,
//     salary: 40000,
//     city: "Dehradun"
// };

// console.log(Object.keys(employee));
// console.log(Object.values(employee));
// console.log(Object.entries(employee));



// 2. Use array destructuring to store them in: color1, color2, color3

// let colors = ["red", "green", "blue"];
// let [color1, color2, color3] = colors;

// console.log(color1);
// console.log(color2);
// console.log(color3);






//3. Use destructuring to create: studentName, studentAge , studentCourse

// let student = {
//     name: "Aman",
//     age: 22,
//     course: "MCA"
// };

// let {name: studentName, age: studentAge, course: studentCourse} = student;
// console.log(studentName);
// console.log(studentAge);
// console.log(studentCourse);




//4. Use `map()` to create: ["Aman", "Priya", "Rahul"]

// let students = [
//     {name: "Aman", age: 22},
//     {name: "Priya", age: 23},
//     {name: "Rahul", age: 20}
// ];

// students.map(student=> console.log(student.name));

// let names = students.map(student => student.name);
// console.log(names);




//5. Using the same array, use `filter()` to find students whose age is greater than `21`.
// let students = [
//     {name: "Aman", age: 22},
//     {name: "Priya", age: 23},
//     {name: "Rahul", age: 20}
// ];

// let ages = students.filter(student=> student.age > 21);
// console.log(ages);




//6. Given: Find only the approved applications.

// let applications = [
//     {id: 101, name: "Aman", status: "Approved"},
//     {id: 102, name: "Priya", status: "Pending"},
//     {id: 103, name: "Rahul", status: "Approved"}
// ];

// let apps = applications.filter(app=> app.status === "Approved");
// console.log(apps);









//7  Create two objects: Combine them into one object using the spread operator.

// let basicInfo = {
//     name: "Sandhya",
//     age: 23
// };

// let education = {
//     degree: "MCA",
//     university: "SGRRU"
// };

// function add(...basicInfo){
//         console.log(basicInfo);
// }

// add(basicInfo, education);


// let combined = {   //Correct answer
//     ...basicInfo,
//     ...education
// };
// console.log(combined);



// 8. Find:
// 1. All product names
// 2. Products costing more than ₹10,000
// 3. Only electronics products
// 4. Create an array containing only the prices

// This single problem combines objects + arrays + `map()` + `filter()`.


// let products = [
//     {name: "Laptop", price: 50000, category: "Electronics"},
//     {name: "Phone", price: 20000, category: "Electronics"},
//     {name: "Chair", price: 3000, category: "Furniture"},
//     {name: "Table", price: 5000, category: "Furniture"}
// ];

// products.map(function(product){
//         console.log(product.name);
// })

// let names = products.map(function(product){   //Better
//     return product.name;
// });
// console.log(names);


// let costs = products.filter(product=> product.price > 10000);
// console.log(costs);

// let elect = products.filter(product=> product.category === "Electronics");
// console.log(elect);


// let prices = products.map(function(product){
//         return product.price;
// })
// console.log(prices);













// Create an array of 5 students:
// Then write code to:

// - Display all student names
// - Find students who scored ≥ 60
// - Create an array containing only marks
// - Find the student names whose age is above 20
// - Create a new student object using spread
// - Use destructuring at least once


// let students = [
//     {
//         name: "Anna",
//         age: 20, 
//         marks: 90
//     },
//     {
//         name: "Justin",
//         age: 22, 
//         marks: 56
//     },
//     {
//         name: "Sayesha",
//         age: 23, 
//         marks: 91
//     },
//     {
//         name: "smith",
//         age: 19, 
//         marks: 78
//     },
//     {
//         name: "Yuan",
//         age: 21, 
//         marks: 45
//     },
// ]

// - Display all student names
// let names = students.map(function(student){
//         return student.name;
// })
// console.log(names);


// - Find students who scored ≥ 60
// let score = students.filter(student=> student.marks >= 60)
// console.log(score);


// - Create an array containing only marks
// let Marks = students.map(function(student){
//         return student.marks;
// })
// console.log(Marks);


// - Find the student names whose age is above 20
// let above20 = students.filter(student=> student.age > 20);

// let names = above20.map(student => student.name);
// console.log(names);
 



// - Create a new student object using spread
// console.log(...students);

// let newStudent = {
//     ...students[0],
//     name: "Alex",
//     marks: 95
// };

// console.log(newStudent);


// - Use destructuring at least once
// let {name : studentName, age : studentAge, marks : studentMarks} = students[0];
// console.log(studentName);
// console.log(studentMarks);
// console.log(studentAge);