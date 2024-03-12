const colorButton = document.querySelector(".color-btn");
const currentColor = document.querySelector(".current-color");
const recentContainer = document.querySelector(".recent-colors");

// to generate hex codes 
const colorArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let recentColor = [];

renderColors();

colorButton.addEventListener("click", pickColor)

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * colorArray.length)
  return randomColor;
}

function pickColor() {
  let colorPicked  = "#";
  for(i=0; i<6; i++) {
    colorPicked += colorArray[getRandomColor()];
    
  }
  document.body.style.backgroundColor = `${colorPicked}`
  currentColor.style.color = `${colorPicked}`
  currentColor.innerHTML = `${colorPicked}`
  if (!recentColor.includes(colorPicked)){
    recentColor.push(colorPicked)
  }
  renderColors();
}

// to show the previously generated colors
function renderColors() {
  let recentColorHtml = "";
  recentColor.forEach((color) => {
    let colorHtml = `<div onClick="changeColor(event)" class="recents" style="background-color: ${color};">${color}</div>`;
    recentColorHtml += colorHtml;
  });
  recentContainer.innerHTML = recentColorHtml;
  
}

function changeColor(e) {
  colorPresent = e.target.innerHTML;
  document.body.style.backgroundColor = `${colorPresent}`;
  currentColor.style.color = `${colorPresent}`
  currentColor.innerHTML = `${colorPresent}`
}
