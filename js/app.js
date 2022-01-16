let counter = 1;
let sliderWidth = 100;
let parentSlider = document.querySelector(".parent");
let sliderContent = document.querySelectorAll(".slider-content");
let sliderLength = sliderContent.length;
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let dotsBox = document.querySelector(".dots-box");

nextBtn.addEventListener("click", () => {
  if (counter >= sliderLength) {
    return false;
  } else {
    counter++;
    addClassActive();
  }
});

prevBtn.addEventListener("click", () => {
  if (counter <= 1) {
    return false;
  } else {
    counter--;
    addClassActive();
  }
});

// Craete Ul Dots Link
let ul = document.createElement("ul");
let active = 0;
for (let i = 0; i < sliderLength; i++) {
  let li = document.createElement("li");
  let liNumber = document.createTextNode(`${i + 1}`);

  li.appendChild(liNumber);
  ul.appendChild(li);
}
dotsBox.appendChild(ul);
let liElement = document.querySelectorAll(".dots-box ul li");
addClassActive();

// Function Add Active Class
function addClassActive() {
  liElement.forEach((ele, index) => {
    ele.addEventListener("click", () => {
      liElement.forEach((ele) => {
        counter = index + 1;
        ele.classList.remove("active");
      });

      parentSlider.style.cssText = `
        transform: translate(-${sliderWidth * (counter - 1)}%);
      `;

      ele.classList.add("active");
    });
    parentSlider.style.cssText = `
        transform: translate(-${sliderWidth * (counter - 1)}%);
      `;
  });

  liElement.forEach((ele) => {
    ele.classList.remove("active");
  });
  liElement[counter - 1].classList.add("active");
}
