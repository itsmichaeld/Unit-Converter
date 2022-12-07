let input = document.getElementById("unit-input");
let convertBtn = document.getElementById("convert-btn");
let lengthParagraph = document.getElementById("length-paragraph");
let volumeParagraph = document.getElementById("volume-paragraph");
let massParagraph = document.getElementById("mass-paragraph");

convertBtn.addEventListener("click", function () {
  // onclick need to call three functions for each conversion
  lengthParagraph.textContent = length(input.value);
  volumeParagraph.textContent = volume(input.value);
  massParagraph.textContent = mass(input.value);
});

// Distance function
function length(distance) {
  return `${input.value} metres = ${(input.value * 3.281).toFixed(3)} feet | ${
    input.value
  } feet = ${(input.value / 3.281).toFixed(3)} metres`;
}

// Volume function
function volume(amount) {
  return `${input.value} liters = ${(input.value * 0.264).toFixed(
    3
  )} gallons | ${input.value} gallons = ${(input.value / 0.264).toFixed(
    3
  )} liters`;
}

// Mass function
function mass(amount) {
  return `${input.value} kilos = ${(input.value * 2.204).toFixed(3)} pounds | ${
    input.value
  } pounds = ${(input.value / 2.204).toFixed(3)} kilos`;
}
