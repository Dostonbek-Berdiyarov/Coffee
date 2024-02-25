var elHeader = document.querySelector(".js-header"),
  elHeaderBtn = document.querySelector(".js-header-btn");

elHeaderBtn.addEventListener("click", function () {
  elHeader.classList.toggle("opened-menu");
  document.body.classList.toggle("unscrolled-body");
});
