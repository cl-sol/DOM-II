//change title text to blue on mouseover
const blueTitleText = document.querySelector(".logo-heading");
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

//change bg color to navajo white on keyup
bgColor.addEventListener("keyup", function() {
    bgColor.style.background = "navajoWhite";
})

//change text color to white when copied to clipboard
const clipboardToWhite = document.querySelector(".content-destination p");
clipboardToWhite.addEventListener("copy", function() {
    clipboardToWhite.style.color = "white";
})

//rotate image 90 degrees on drag
const imgRotate = document.querySelector(".content-section img");
imgRotate.addEventListener("drag", function() {
    imgRotate.style.transform = "rotate(180deg)";
})

//resize image to 50% when drag is released
const smallerPic = document.querySelector(".inverse-content img");
smallerPic.addEventListener("dragend", function() {
    smallerPic.style.width = "50%";
})

//add border to nav links on mouse over
const navigation = document.querySelectorAll('.nav-link')
navigation.forEach(navigation => {
    navigation.addEventListener('mouseover', navigation => {
        navigation.target.style.border = '2px dashed saddleBrown';
    })
})

//add border to buttons on click
const submitButtons = document.querySelectorAll('.btn')
submitButtons.forEach(submitButtons => {
    submitButtons.addEventListener("click", event => {
        event.target.style.border = '3px dashed saddleBrown';
        event.stopPropagation();
    })

})

//change button background color on click
const buttonColor = document.querySelectorAll(".btn");
buttonColor.forEach(buttonColor => {
    buttonColor.addEventListener("click", buttonColor => {
        buttonColor.target.style.background = "teal";
    })
})


//Stop refresh
const noRefresh = document.querySelectorAll(".nav-link");
noRefresh.forEach(noRefresh => {
    noRefresh.addEventListener("click", function() {
        noRefresh.preventDefault();
    })
})

//change nav link color on window resize -- won't work
// const navLinksColor = document.querySelectorAll(".nav a");
// navLinksColor.forEach(navLinksColor) {
//     navLinksColor.addEventListener("dblclick", function () {
//         navLinksColor.style.color = "darkGoldenRod";    
//         })
//     };

//
// const footer = document.querySelector(".footer p");
// footer.addEventListener("select", function() {
//     footer.style.color = "red";
// })