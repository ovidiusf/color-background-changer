
//select the elements we want to change
//we use class selector . to select the colors
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random-button");


//check the selected elements
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// console.log(randomButton);


function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value 
        + ", " 
        + color3.value + ")";

        css.textContent = body.style.background +";";
}

function generateRandomColor(){
    var letters ="0123456789ABCDEF";
    var color = "#";
    for(var i=0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColors(){
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    color3.value = generateRandomColor();
    setGradient();
}

//display the current gradient
setGradient();

//listen for input changes
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors);






