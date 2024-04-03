const accordionParagraph = document.querySelectorAll(".item--paragraph-drop");
const arrayOfParagraph = Array.from(accordionParagraph);
const interactiveIcons = document.querySelectorAll(".interactive-icons");
const item1 = document.querySelector(".questions--item1");
const item2 = document.querySelector(".questions--item2");
const item3 = document.querySelector(".questions--item3");
const item4 = document.querySelector(".questions--item4");


item1.addEventListener("click", accordion1);
item2.addEventListener("click", accordion2);
item3.addEventListener("click", accordion3);
item4.addEventListener("click", accordion4);

function accordion1() {
   arrayOfParagraph[0].classList.remove("item--paragraph-drop-inactive");
   arrayOfParagraph[0].classList.toggle("item--paragraph-drop-active");
   arrayOfParagraph[0].classList.add("item--paragraph-drop-inactive");
   interactiveIcons[0].classList.remove("plus-icon");
   interactiveIcons[0].classList.toggle("minus-icon");
   interactiveIcons[0].classList.add("plus-icon");
}

function accordion2() {
   arrayOfParagraph[1].classList.remove("item--paragraph-drop-inactive");
   arrayOfParagraph[1].classList.toggle("item--paragraph-drop-active");
   arrayOfParagraph[1].classList.add("item--paragraph-drop-inactive");
   interactiveIcons[1].classList.remove("plus-icon");
   interactiveIcons[1].classList.toggle("minus-icon");
   interactiveIcons[1].classList.add("plus-icon");
}

function accordion3() {
   arrayOfParagraph[2].classList.remove("item--paragraph-drop-inactive");
   arrayOfParagraph[2].classList.toggle("item--paragraph-drop-active");
   arrayOfParagraph[2].classList.add("item--paragraph-drop-inactive");
   interactiveIcons[2].classList.remove("plus-icon");
   interactiveIcons[2].classList.toggle("minus-icon");
   interactiveIcons[2].classList.add("plus-icon");
}

function accordion4() {
   arrayOfParagraph[3].classList.remove("item--paragraph-drop-inactive");
   arrayOfParagraph[3].classList.toggle("item--paragraph-drop-active");
   arrayOfParagraph[3].classList.add("item--paragraph-drop-inactive");
   interactiveIcons[3].classList.remove("plus-icon");
   interactiveIcons[3].classList.toggle("minus-icon");
   interactiveIcons[3].classList.add("plus-icon");
}