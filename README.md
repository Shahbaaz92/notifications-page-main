# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Solution](https://github.com/Shahbaaz92/notifications-page-main)
- Live Site URL: [Live Site](https://shahbaaz92.github.io/notifications-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Use of toggle on classlists .

```js
allRead.addEventListener("click", () => {
  if (notification.innerText === "3") {
    notification.innerText = "0";
  } else if (notification.innerText === "0") {
    notification.innerText = "3";
  }
  if (read.innerText === "read") {
    read.innerText = "unread";
  } else if (read.innerText === "unread") {
    read.innerText = "read";
  }

  for (let i = 0; i < unreadNotices.length; i++) {
    unreadNotices[i].classList.toggle("unread");
  }
  for (let i = 0; i < unreadDots.length; i++) {
    unreadDots[i].classList.toggle("unread-dot");
  }
});
```

### Continued development

I am going to improve my development and design skills.

### Useful resources

- [Google Fonts](https://fonts.google.com/) - I got all my fonts from Google fonts.

## Author

- Website - [Shahbaaz Athhar](https://github.com/Shahbaaz92)
- Frontend Mentor - [Shahbaaz Athhar](https://www.frontendmentor.io/profile/Shahbaaz92)
