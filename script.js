document.addEventListener("DOMContentLoaded", () => {
  const ratingButtons = document.querySelectorAll(".container__notes--number");
  const submitButton = document.getElementById("submit-btn");
  const ratingContainer = document.querySelector(".container");
  const thankYouContainer = document.querySelector(".thank-you-container");
  const selectedRatingText = document.getElementById("selected-rating");

  let selectedRating = null;

  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ratingButtons.forEach((btn) => btn.classList.remove("selected"));

      button.classList.add("selected");
      selectedRating = button.getAttribute("data-rating");
    });
  });

  submitButton.addEventListener("click", () => {
    if (selectedRating) {
      selectedRatingText.textContent = selectedRating;
      ratingContainer.classList.add("hidden");
      thankYouContainer.classList.remove("hidden");
    } else {
      alert("Please select a rating before submitting!");
    }
  });
});
