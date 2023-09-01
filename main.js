const submitBtn = document.getElementById("submit");
const closeBtn = document.getElementById("close");
const popup = document.querySelector(".popupContainer");

submitBtn.addEventListener("click", () => {
  popup.classList.add("popupActive");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("popupActive");
});
