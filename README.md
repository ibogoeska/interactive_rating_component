# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 
I dearly recommend to everyone who is new in this area to practise doing small and even bigger projects on their page. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./design/desktop-design.jpg)
![](./design/desktop-thank-you-state.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/ibogoeska/interactive_rating_component)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- JavaScript

### What I learned

I have mostly done practise on what I have learned in the area from HTML and CSS from the Brainster Academy, although I needed to search and read more to find solutions in the process of creating the JavaScript file, which offers the users of this interactive component to rate their UX from 1-5, and dinamically show them their choice after clicking the Submit button. 
You can see a snippet of the code used down below:

```js
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
```


## Author

- Github - [ibogoeska](https://github.com/ibogoeska)
- Frontend Mentor - [@ibogoeska](https://www.frontendmentor.io/profile/ibogoeska)
- LinkedIn - [Ivona Bogoeska](https://www.linkedin.com/in/ivona-bogoeska-1358b145/)
