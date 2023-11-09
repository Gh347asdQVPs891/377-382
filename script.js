// let elem = document.querySelector('#elem'); {
//   elem.style.width = "100px";
//     elem.style.height = "100px";
//     elem.style.border = "1px solid black";
//     elem.style.color = 'red';
// }


// let elem1 = document.querySelector('#elem'); 
// {
//     elem1.style.width = "100px";
//     elem1.style.height = "100px";
//     elem1.style.border = "1px solid black";
//     elem1.style.color = 'red'; 
//     elem1.style.fontSize = '20px';
// }


// function addFloatToLi()
// {
//   const listItems = document.querySelectorAll("#elem li");
//   for (let i = 0; i < listItems.length; i++) 
//   {
//     listItems[i].style.cssFloat = "right";
//   }
// }


// function Out() {
//   const prg = document.getElementById("prg");
//   prg.classList.toggle("crossed-out");
// }

// function Bold() {
//   const prg = document.getElementById("prg");
//   prg.classList.toggle("bold");
// }

// function Red() {
//   const prg = document.getElementById("prg");
//   prg.classList.toggle("red");
// }


let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
	elem.classList.toggle('active');
});
