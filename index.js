// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

const svgText = document.querySelectorAll("#svg-text path");
for (let i = 0; i < svgText.length; i++) {
  console.log(`Letter ${i} is ${svgText[i].getTotalLength()}`);
}

let navbarId = document.getElementById("main-navbarId");

window.addEventListener("scroll", function () {
  if (window.pageYOffset < 270) {
    navbarId.classList.remove("gradientBG");
  }
  if (navbarId.classList.contains("gradientBG") && window.pageYOffset > 100) {
    return;
  }
  if (window.pageYOffset > 270) {
    navbarId.classList.add("gradientBG");
  }
});
