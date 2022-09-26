const cardRating = document.querySelector(".card__rating");
const rating = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".card__button");
const cardOne = document.querySelector(".card-1");
const cardTwo = document.querySelector(".card-2");
const cardStateRate = document.querySelector(".card__state__rate");

cardRating.addEventListener("click", function (e) {
  rating.forEach((r) => {
    r.className = "rating";
  });

  if (e.target.classList == "rating") {
    e.target.classList.add("active");
  }

  cardStateRate.innerHTML = e.target.innerHTML;
  cardStateRate.style.fontSize = "0.7rem";
});

submitBtn.addEventListener("click", (e) => {
  cardTwo.style.display = "block";
  cardOne.style.display = "none";
});
