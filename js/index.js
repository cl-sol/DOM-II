// Your code goes here

//change title text to blue on mouseover
const blueTitleText = document.querySelector (".logo-heading");
blueTitleText.addEventListener("mouseover", function() {
    blueTitleText.style.color = "cadetBlue";
})

//change navbar background color to sand on mouse enter
const navColor = document.querySelector(".main-navigation");
navColor.addEventListener("mouseenter", function() {
    navColor.style.background = "burlyWood";
})

//revert navbar to white on mouse leave
navColor.addEventListener("mouseleave", function (){
    navColor.style.background = "white";
})

//lower opacity main pic on double click
const hideMainPic = document.querySelector(".intro img");
hideMainPic.addEventListener("dblclick", function (){
    hideMainPic.style.opacity = "0.5";
})  

//change bg color to chocolate on keydown
const bgColor = document.querySelector("body");
bgColor.addEventListener("keydown", function() {
    bgColor.style.background = "chocolate";
})
