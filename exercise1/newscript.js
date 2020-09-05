//parseInt

//EXERCISE 1
//set global variables
var x = 0; //set this global for exercise 1
let firstHeading = document.createElement('h1'); //css define form ; defining this as global so that i can call the same heading style from css
let text = document.createElement('text'); //css define form ; defining this as global so that i can call the same heading style from css

//specific for exercise 1
let exercise1 = document.getElementById('number'); //retrieve html class 
window.onload = function() {
    firstHeading.innerText =x; //vars
    firstHeading.classList.add('js-header'); //css define form
    exercise1.appendChild(firstHeading); //attach this new heading to the html class
}
function changeNumbers(n){
    //console.log(x)
    x = x+n
    firstHeading.innerText =x; //vars
    firstHeading.classList.add('js-header'); //css define form
    exercise1.appendChild(firstHeading); //attach this new heading to the html class
    return x; 
}

//exercise 2
let exercise2 = document.getElementById('fruit'); //retrieve html class
// function addFruit(event){
//     console.log(event.target.name)
//     // const buttons= exercise2.querySelectorAll('button');
//     // buttons.forEach(button=>{
//     //     button.addEventListener('click',addToCart)
//     //     console.log(button)
//     // })
// }
var basketlist = []

function addFruit(button){
    //'this' argument from html pass in the whole button element
    //console.log(button.value);
    //get the value of the button element
    addToCart(button.value);
}

function addToCart(fruitname){
    //console.log(fruitname);
    //add to the initially empty list
    //next time get the latest global list
    basketlist.push(fruitname);
    //console.log(basketlist);
    //update heading
    text.innerText =basketlist; //vars
    text.classList.add('js-header'); //css define form
    exercise2.appendChild(text); //attach this new heading to the html class
    //return the new list to global
    return basketlist;
}
