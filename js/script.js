const elHeader = document.querySelector(".js-header"),
  elHeaderBtn = document.querySelector(".js-header-btn");

const elFirstDetails = document.querySelectorAll("#firstDetailsItems"),
  elSecondDetails = document.querySelectorAll("#secondDetailsItems"),
  elThirdDetails = document.querySelectorAll("#thirdDetailsItems"),
  elFourthDetails = document.querySelectorAll("#fourthDetailsItems"),
  elFifthDetails = document.querySelectorAll("#fifthDetailsItems");

const elFirstSummary = document.querySelector("#firstDetails"),
  elSecondSummary = document.querySelector("#secondDetails"),
  elThirdSummary = document.querySelector("#thirdDetails"),
  elFourthSummary = document.querySelector("#fourthDetails"),
  elFifthSummary = document.querySelector("#fifthDetails");

const elFirstSubtitle = document.querySelectorAll("#FirstSubtitle"),
  elSecondSubtitle = document.querySelectorAll("#secondSubtitle"),
  elThirdSubtitle = document.querySelectorAll("#thirdSubtitle"),
  elFourthSubtitle = document.querySelectorAll("#fourthSubtitle"),
  elFifthSubtitle = document.querySelectorAll("#fifthSubtitle");

elHeaderBtn.addEventListener("click", function () {
  elHeader.classList.toggle("opened-menu");
  document.body.classList.toggle("unscrolled-body");
});

// console.log(
//   elFirstSummary,
//   elSecondSummary,
//   elThirdSummary,
//   elFourthSummary,
//   elFifthummary
// );

elFirstDetails.forEach((categories, index) => {
  categories.addEventListener("click", () => {
    elFirstDetails.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("actived");
      } else {
        item.classList.remove("actived");
      }
    });
    elFirstSubtitle.forEach((text, ind) => {
      if (ind === index) {
        elFirstSummary.textContent = text.textContent;
      }
    });
  });
});
elSecondDetails.forEach((categories, index) => {
  categories.addEventListener("click", () => {
    elSecondDetails.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("actived");
      } else {
        item.classList.remove("actived");
      }
    });
    elSecondSubtitle.forEach((text, ind) => {
      if (ind === index) {
        elSecondSummary.textContent = text.textContent;
      }
    });
  });
});
elThirdDetails.forEach((categories, index) => {
  categories.addEventListener("click", () => {
    elThirdDetails.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("actived");
      } else {
        item.classList.remove("actived");
      }
    });
    elThirdSubtitle.forEach((text, ind) => {
      if (ind === index) {
        elThirdSummary.textContent = text.textContent;
      }
    });
  });
});
elFourthDetails.forEach((categories, index) => {
  categories.addEventListener("click", () => {
    elFourthDetails.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("actived");
      } else {
        item.classList.remove("actived");
      }
    });
    elFourthSubtitle.forEach((text, ind) => {
      if (ind === index) {
        elFourthSummary.textContent = text.textContent;
      }
    });
  });
});
elFifthDetails.forEach((categories, index) => {
  categories.addEventListener("click", () => {
    elFifthDetails.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("actived");
      } else {
        item.classList.remove("actived");
      }
    });
    elFifthSubtitle.forEach((text, ind) => {
      if (ind === index) {
        elFifthSummary.textContent = text.textContent;
      }
    });
  });
});
