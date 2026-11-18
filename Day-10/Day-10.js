// const heading = document.getElementById("heading");
// const button = document.getElementById("changeBtn");

// button.addEventListener("click", () => {
//   heading.textContent = "JavaScript connected successfully!";
// });


// 1. -------------------Get Element by ID ---------------

// const heading = document.getElementById("heading");
// console.log(heading);







// 2. -----------Query Selector----------------
// const heading = document.querySelector("#heading");
// const paragraph = document.querySelector(".description");
// const button = document.querySelector("button");








// 3. -------------querySelectorAll()---------------
// const items = document.querySelectorAll(".item");
// console.log(items);
// console.log(items.length);

// items.forEach((item) => {
//   console.log(item.textContent);
// });



// ---------- Changing HTML content ----------
// const title = document.querySelector("#title");
// title.textContent = "New Title";




// -------------- Three important properties ------------

// 1. textContent : Sets or reads text content.
// title.textContent = "Hello JavaScript";


// 2. innerHTML : Reads or replaces the HTML inside an element.
// title.innerHTML = "<span>Hello</span>";


// 3. innerText : Reads or sets the rendered text, taking CSS visibility and layout into account.
// title.innerText = "Welcome back !";













// 4. -------------------Changing CSS styles using JavaScript-----------------
// const heading = document.querySelector("#heading");

// heading.style.color = "yellow";
// heading.style.backgroundColor = "gray";
// heading.style.fontweight = "30px";
// heading.style.padding = "20px;"









//  5.--------------------Adding and removing CSS classes-----------------------

// const heading = document.querySelector("#heading");

// heading.classList.add("active");
// heading.classList.remove("active");
// heading.classList.toggle("hidden");


// classList.contains()` — checks whether a class exists and returns `true` or `false`.

// heading.classList.add("active");
// console.log(heading.classList.contains("active"));









// 6. ------------------- Handling events -----------------------

// const heading = document.querySelector("#heading");
// const button = document.querySelector("#changeBtn");

// button.addEventListener("click", function(){
//     heading.textContent = "Welcome to javaScript!";
// });







// 7. ------------------The event object ------------------------
// const button = document.querySelector("#changeBtn");

// button.addEventListener("click", (event) => {
//   console.log(event.type);
//   console.log(event.target);
// });


// const username = document.querySelector("#username");

// username.addEventListener("input", (event)=>{
//     console.log(event.target.value);
// });








// 8. ----------------- Creating new elements dynamically ---------------------
// const list = document.querySelector("#productList");
// const item = document.createElement("li");

// item.textContent = "Crochet flower Bouquet";
// list.appendChild(item);





// const list = document.querySelector("#productList");

// const Products = [
//     "Crochet Flowers Bouquet",
//     "Pink Rose Bouquet",
//     "Heart Coaster"
// ];

// Products.forEach((Product)=>{
//     const item = document.createElement("li");

//     item.textContent = Product;
//     list.appendChild(item);
    
//     // item.remove();
//     // list.replaceChildren();
// })





// 9. --------------- Working with HTML attributes -----------------

// const image = document.querySelector("#productImage");
// image.setAttribute("alt", "Pink rose bouquet");

// console.log(image.getAttribute("alt"));
// image.setAttribute("src", "bouquet.jpg");


// image.src = "bouquet.jpg";
// console.log(image.alt);





// 10. ---------------------- Handling forms and user input ---------------

// const form = document.querySelector("#loginForm");
// const username = document.querySelector("#username");
// const message = document.querySelector("#message");

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();

//     const name = username.value.trim();

//     if(name === ""){
//         message.textContent = "Please enter your username.";
//         return;
//     }

//     message.textContent = `welcome, ${name}!`
// })








// 11. --------------- How to connect JavaScript to HTML -----------------------

// Why use defer?

// The defer attribute tells the browser to download the external JavaScript file while parsing HTML, then execute it after the HTML has been parsed.
// Without correct script loading, JavaScript may execute before the elements it needs exist, causing querySelector() to return null.








// 12.  ------------ Mini project — Interactive product card----------------

// Let's combine the concepts into6 a small feature inspired by your Petal & Purl store.

// The card will let you:
// - Increase and decrease product quantity.
// - Update the quantity displayed on the page.
// - Display the calculated total price.
// - Prevent quantity from going below one.


const price = 1299;
const stock = 12;
let quantity = 1;

const decrease= document.querySelector("#DecreaseBtn");
const quantityDisplay = document.querySelector("#quantity");
const increase = document.querySelector("#IncreaseBtn");
const totalPrice = document.querySelector("#total");

function updateProductInfo(){
    quantityDisplay.textContent = quantity;
    totalPrice.textContent = (quantity * price);

    decrease.disable = quantity <=1;
    increase.disable = quantity >=stock;
}

increase.addEventListener("click", ()=>{
    if(quantity < stock){
        quantity++;
        updateProductInfo();
    }
});

decrease.addEventListener("click", ()=>{
    if(quantity > 1){
        quantity--;
        updateProductInfo();
    }
});

updateProductInfo();