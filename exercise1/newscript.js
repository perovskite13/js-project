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
let picgrid = document.getElementById('picg'); //retrieve html class

var input = document.querySelector('#inputform').value;
console.log(input);

function generateIQ (input) {
    console.log(input);
    var text = "";
    var i;
    for (i = 0; i < input.length ;i++) {
        text += input.elements[i].value + "<br>";
    }
    console.log(text);

    //document.getElementById("demo").innerHTML = text;
}

    //let generateBtn, canvas, ctx;
//canvas.width = picgrid.width;
//canvas.height = picgrid.height;
    //let fontSize;
    // Text style: white with black borders
    // ctx.fillStyle = 'white';
    // ctx.strokeStyle = 'black';
    // ctx.textAlign = 'center';

    // Top text font size
    // fontSize = picgrid.width * topTextSize;
    // ctx.font = fontSize + 'px Impact';
    // ctx.lineWidth = fontSize / 20;

    // Draw text
//     text.split('\n').forEach(function (t, i) {
//         ctx.fillText(t, picgrid.width / 2);
//         ctx.strokeText(t, picgrid.width / 2);
//     });


// function init () {
//     // Initialize variables
//     generateBtn = document.getElementById('generate-btn');
//     //ctx = canvas.getContext('2d');

//     // Generate button click listener
//     generateBtn.addEventListener('click', function () {
//         generateIQ(Input);
//         console.log(Input);
//     });
// }

// init();




//TEST
// const cvs = document.getElementById("snake");  
// const ctx = cvs.getContext("2d");  
// const box = 32; 

// //set up snake
// let snake = [];  
// snake[0] = {  
//     x : 9 * box,  
//     y : 10 * box  
// };  

// //set up food
// let food = {  
//     x : Math.floor(Math.random()*17+1) * box,  
//     y : Math.floor(Math.random()*15+3) * box  
// }  

// // key interactions
// let score = 0;
// let d;  
// box.addEventListener("click",direction);  
// function direction(event){  
//     let key = event.keyCode;  
//     if( key == 37 && d != "RIGHT"){  
//         left.play();  
//         d = "LEFT";  
//     }else if(key == 38 && d != "DOWN"){  
//         d = "UP";  
//         up.play();  
//     }else if(key == 39 && d != "LEFT"){  
//         d = "RIGHT";  
//         right.play();  
//     }else if(key == 40 && d != "UP"){  
//         d = "DOWN";  
//         down.play();  
//     }  
// }  

// //draw snake
// function draw(){  
            
//     for( let i = 0; i < snake.length ; i++){  
//         ctx.fillStyle = ( i == 0 )? "green" : "white";  
//         ctx.fillRect(snake[i].x,snake[i].y,box,box);  
          
//         ctx.strokeStyle = "red";  
//         ctx.strokeRect(snake[i].x,snake[i].y,box,box);  
//     }   
 
//     //ctx.drawImage(foodImg, food.x, food.y);  
//     let snakeX = snake[0].x;  
//     let snakeY = snake[0].y;  
//     if( d == "LEFT") snakeX -= box;  
//     if( d == "UP") snakeY -= box;  
//     if( d == "RIGHT") snakeX += box;  
//     if( d == "DOWN") snakeY += box;  
//     if(snakeX == food.x && snakeY == food.y){  
//         score++;  
//         //eat.play();  
//         // food = {  
//         //     x : Math.floor(Math.random()*17+1) * box,  
//         //     y : Math.floor(Math.random()*15+3) * box  
//         // }  
 
//     }else{  
 
//         snake.pop();  
//     }  
 
//     let newHead = {  
//         x : snakeX,  
//         y : snakeY  
//     }   
 
//     if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){  
//         clearInterval(game);  
//         //dead.play();  
//     }  
      
//     snake.unshift(newHead);  
      
//     ctx.fillStyle = "blue";  
//     ctx.font = "45px Changa one";  
//     ctx.fillText(score,2*box,1.6*box);  
// }  
 
// setInterval(draw,100); 

//others
//console.log(fruitname);
//add to the initially empty list
//next time get the latest global list
//   basketlist.push(fruitname);
//console.log(basketlist);
//   return basketlist;

// function addFruit(event){
//with event listener
//     console.log(event.target.name)
//     // const buttons= exercise2.querySelectorAll('button');
//     // buttons.forEach(button=>{
//     //     button.addEventListener('click',addToCart)
//     //     console.log(button)
//     // })
// }
//var basketlist = []
//parseInt
