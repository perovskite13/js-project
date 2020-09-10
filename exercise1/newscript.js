//EXERCISE 1
//set global variables
var x = 0; //set this global for exercise 1
let heading1 = document.createElement('h1'); //css define form ; defining this as global so that i can call the same heading style from css
let heading2 = document.createElement('h1'); //css define form ; defining this as global so that i can call the same heading style from css
let heading3 = document.createElement('h1'); //css define form ; defining this as global so that i can call the same heading style from css
let heading4 = document.createElement('h1'); //css define form ; defining this as global so that i can call the same heading style from css


//specific for exercise 1
let exercise1 = document.getElementById('number'); //retrieve html class 
window.onload = function() {
    heading1.innerText =x; //vars
    heading1.classList.add('js-header'); //css define form
    exercise1.appendChild(heading1); //attach this new heading to the html class
}
function changeNumbers(n){
    x = x+n
    heading1.innerText =x; //vars
    heading1.classList.add('js-header'); //css define form
    exercise1.appendChild(heading1); //attach this new heading to the html class
    return x; 
}

//EXERCISE 2
let exercise2 = document.getElementById('fruit'); //retrieve html class
function addFruit(button,price){
    //'this' argument from html pass in the whole button element
    addToCart(button.value,price); //get the value of the button element
}
var priceInt = 0
function addToCart(fruitname,price){
    //create fruit text element
    var text = document.createElement('text'); //create fruit text element container
    text.innerText =fruitname; //store the fruit in the text element
    
    //create fruit list html element
    var fruits = document.createElement("LI");// Create a <li> node
    fruits.appendChild(text); // Append the text to <li>
    document.getElementById('basket').appendChild(fruits)

    //total price
    var newprice = parseInt(price);
    priceInt = priceInt+newprice;
    //console.log(priceInt);
    heading2.innerText ="$ " + priceInt; 
    heading2.classList.add('js-header');
    exercise2.appendChild(heading2); //attach this new heading to the html class

    return priceInt
}

//EXERCISE 3
let exercise3 = document.getElementById('whack-a-mole'); //retrieve html class
const holes = document.querySelectorAll('.hole')
const mole = document.querySelectorAll('.mole')
let r = 0

function randomMole(){
    holes.forEach(h => {
        //reset
        //remove the moles from all holes
        h.classList.remove("mole")
    })
    //set random number
    i = Math.floor(Math.random()*8)
    //add 1 mole pic (defined by .mole in css) to the random hole id
    holes[i].classList.add("mole")
    //record the hole id
    hitid = holes[i].id
}

//set duration between random mole
setInterval(() => {
    randomMole()
}, 1000)

//add global hit to score
holes.forEach(hit =>{
    hit.addEventListener("click",()=>{
        if(hit.id == hitid){
            r++ //increment score
            heading3.innerText = r; 
            heading3.classList.add('js-header');
            exercise3.appendChild(heading3);
            //or h2 id.textContent
        }
    }
    )
})

//EXERCISE 4
const canvas = document.getElementById('picg'); //retrieve html class
const ctx = canvas.getContext('2d');

const input = document.querySelector('#inputform');
console.log(ctx);

var topTextSize = 0.1;
var fontSize = 0.1;

function generateIQ () {

    let text = input.value;
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //Draw text
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Text style: white with black borders
    //ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';
    ctx.textAlign = 'center';

    // Top text font size
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Serif';
    //ctx.lineWidth = fontSize / 30;

    // Draw top text
    ctx.textBaseline = 'top';
    text.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });
}

 