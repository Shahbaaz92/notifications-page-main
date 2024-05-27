const allRead = document.getElementById("all-read");
const read = document.getElementById("read");
const notification = document.getElementById("notification");
let unreadNotices = document.querySelectorAll(".unread");
let unreadDots = document.querySelectorAll(".unread-dot");

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
