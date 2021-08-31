 
// RANDOM NUMBER GENERATOR 
var randomNumber = Math.floor(Math.random()*4); 
var buttonElements = document.querySelectorAll(".btn");

// ON LOAD

// ON CLICK 
buttonElements.forEach(el => {
    el.addEventListener('click', () => {
        buttonName = el.classList[1];
        audio(buttonName);
        
})
})

 document.addEventListener("click", shadow());
setTimeout((function() {
  buttonElements[randomNumber].classList.remove("pressed");
}), 200);



// FUNCTIONS 
function audio (buttonName) {
 if (buttonName == "red"|| "green" || "yellow" ||"blue"){
   sound = new Audio("sounds/" + buttonName + ".mp3");
   sound.play()
 }
}

function shadow (){
    buttonElements[randomNumber].classList.add("pressed");
} 


 function onLoadFunctions (){

 }
function onClickFunctions(){

}



