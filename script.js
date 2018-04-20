
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  color1.backgroundColor = color1.value;
  color1.border = "none";
  color2.backgroundColor = color2.value;
  css.textContent = body.style.background + ";";
}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", function() {
  var x = getRandomArbitrary(10, 99);
  var y = getRandomArbitrary(10, 99);
  var z = getRandomArbitrary(10, 99);
  var a = getRandomArbitrary(10, 99);
  var b = getRandomArbitrary(10, 99);
  var c = getRandomArbitrary(10, 99);
  var color = (body.style.background =
    "linear-gradient(to right, #" + x + y + z + ",#" + a + b + c + ")");
});
