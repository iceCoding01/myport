//Event listener

const conTainer = document.querySelector(".container");
const active = document.getElementByClassName("ative");


    active.addEventListener("hover", display)

function display(){
    conTainer.style.display = "block";
}
//Calling the function
display();
