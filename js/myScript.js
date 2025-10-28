const myHeading = document.getElementById("myHeading")
myHeading.innerText = "Abdul Test";
const firstLink = document.querySelector("nav ul li a")
firstLink.setAttribute("Hred","https://www.google.co.uk")
const colorPickers = document.querySelector(".colPicker")

console.dir(colorButtons)

colourButtons.forEach(button => {
    button.style.backgroundColor = "green";
});

document.getElementById("myTestBtn").addEventListener('click', function(){
    console.info('hi');
});