// let imagesArray = document.querySelectorAll(".cutout > img");
const imagesArray = document.querySelector("div.cutout").children;
const changedClips = document.querySelectorAll(".cutout > img:nth-child(-n+5)");

let images = [
  "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/09/3e9610dc3fd629737cde62b9756fbcfe.jpg",
  "https://d2jv9003bew7ag.cloudfront.net/uploads/Barack-Obama-by-Kehinde-Wiley-c.jpg",
  "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://makeawebsitehub.com/wp-content/uploads/2014/12/HNCK3292-1300x866.jpg",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/03/rubber-band-portraits4.jpg"
];

for (let index = 0; index < imagesArray.length; index++) {
  document.querySelector("div.cutout").lastElementChild.style.backgroundColor =
    "black";
  if (
    document.querySelector("div.cutout").lastElementChild !== imagesArray[index]
  ) {
    imagesArray[index].setAttribute("src", images[1]);
  } else {
  }
}

changedClips.forEach(item => {
  item.style.display = "none";
});

// placed click handler on the images container so it may bubble down its child elements
document.querySelector("div.cutout").addEventListener("click", changeClip);

function changeClip() {
  changedClips.forEach(item => {
    item.style.display = "block";
    item.style.clipPath = `polygon(${getRand(0, 45)}% ${getRand(
      0,
      55
    )}%, ${getRand(0, 65)}% ${getRand(0, 75)}%, ${getRand(0, 85)}% ${getRand(
      0,
      95
    )}%)`;
  });
}

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
