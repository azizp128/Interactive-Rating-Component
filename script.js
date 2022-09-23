const cardRating = document.querySelector(".card__rating");
const rating = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".card__button");
const cardOne = document.querySelector(".card-1");
const cardTwo = document.querySelector(".card-2");

cardRating.addEventListener("click", function (e) {
  rating.forEach((rating) => {
    rating.className = "rating";
  });

  if (e.target.classList == "rating") {
    e.target.classList.add("active");
  }
});

submitBtn.addEventListener("click", (e) => {
  cardTwo.style.display = "block";
  cardOne.style.display = "none";
});
