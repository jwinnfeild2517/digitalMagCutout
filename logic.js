const imgElements = document.querySelector("div.cutout");
// selects the first 5 img elements in the .cutout div
const changedClips = document.querySelectorAll(".cutout > img:nth-child(-n+5)");

imgElements.lastElementChild.style.backgroundColor = "black";

changedClips.forEach(item => {
  item.style.display = "none";
});

// placed click handler on the cutout container so it may bubble down its child elements
imgElements.addEventListener("click", changeClip);

function clipPathMaker() {
  return `${getRand(0, 100)}% ${getRand(0, 100)}%`;
}

function changeClip() {
  changedClips.forEach(item => {
    item.style.display = "block";
    item.style.clipPath = `polygon(${clipPathMaker()}, ${clipPathMaker()}, ${clipPathMaker()}`;
  });
}

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const input = document.querySelector("input");
input.addEventListener("change", () => {
  changedClips.forEach(image => {
    image.src = URL.createObjectURL(event.target.files[0]);
  });
});

// add upload functionality
// add background color picker
