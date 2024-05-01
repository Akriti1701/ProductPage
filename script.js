const sizeOption = document.querySelector(".size-option");

sizeOption.addEventListener("click", function (e) {
  if (e.target.tagName === "DIV") {
    const selectedSize = sizeOption.querySelector(".selected");
    if (selectedSize) {
      selectedSize.classList.remove("selected");
    }
    if (selectedSize !== e.target) {
      e.target.classList.add("selected");
    }
  }
});
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");
const countDisplay = document.querySelector(".count");

let count = 0;

minusButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

plusButton.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
