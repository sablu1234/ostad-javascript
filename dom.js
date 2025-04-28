// console.log(document);
// console.log(typeof document);
// document.title = 'Hello World!';
// console.log(document.title);
// console.log(document.all);

// GET ELEMENTS BY ID
// const header = document.getElementById("header");
// console.log(header);
// header.innerText = "PHP Class";
// header.innerHTML = "PYTHON Class";
// header.textContent = "JavaScript Class";
// let a = header.innerHTML;
// let a = header.innerText;
// let a = header.textContent;
// console.log(a);

// Style
// header.style.color = "red";
// header.style.fontSize = "50px";

// GET ELEMENTS BY CLASS
// const items = document.getElementsByClassName("items");
// console.log(items);
// for(let i=0; i<items.length; i++){
//     items[i].style.color = "red";

// }

// Get elements by tag name
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// Get elements by query selector
// const header = document.querySelector("#header");
// console.log(header);

// let lastchaild = document.querySelector(".items:nth-child(2)");
// console.log(lastchaild.style.color="red");

// QuewrySelectorAll
// const items = document.querySelectorAll(".items");
// console.log(items);
 

// Top to Bottom Accessing
// const ul = document.querySelector("#item");
// console.log(ul);
// const child = ul.children;
// console.log(child);

// Bottom to Top access
// const child = document.querySelectorAll(".items");
// const ul = child[0].parentElement;
// console.log(ul);

// Creating an element
// const divElement = document.createElement("div");
// console.log(divElement);
// divElement.className ="box";
// divElement.setAttribute("id","main");
// divElement.setAttribute("href","google.com");
// console.log(divElement);


// Insert Element
// const container = document.querySelector("#container");
// const divElement = document.createElement("div");
// divElement.innerText = "hello";
// container.appendChild(divElement);

// Event Listeners
const btn = document.querySelector("#btn");
// console.log(btn);
// btn.addEventListener("click",function(e){
//     console.log(e); 
// })
// btn.addEventListener("click",function(e){
//     console.log(e.clientX); 
// })
// btn.addEventListener("mouseover",function(e){
//     console.log("Moue hover"); 
// })

const inputElement = document.querySelector("input");
// console.log(inputElement);
// inputElement.addEventListener("keyup",function(){
//      console.log(inputElement.value);
// })

// inputElement.addEventListener("focus",function(){
//     console.log("input is focused");
// })

// inputElement.addEventListener("blur",function(){
//     console.log("input is blur");
// })

// inputElement.addEventListener("copy",function(){
//     console.log("input is copy");
// })

// inputElement.addEventListener("cut",function(){
//     console.log("input is cut");
// })

// inputElement.addEventListener("paste",function(){
//     console.log("input is paste");
// })

// document.querySelector('form').addEventListener('submit',function(event){
//     event.preventDefault();
//     console.log(inputElement.value);
// })

