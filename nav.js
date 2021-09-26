const trackButton = document.getElementById("menuButton");
const navBar = document.getElementById("navBar");
const teamHover = document.getElementById("linkHover");
const navId1 = document.getElementById("navId1");
const navId2 = document.getElementById("navId2");
const navId3 = document.getElementById("navId3");
const navId4 = document.getElementById("navId4");
const navId5 = document.getElementById("navId5");

trackButton.addEventListener("click", menuBarSwitch);
teamHover.addEventListener("mouseover", hideOut);
navId1.addEventListener("click", logoNavSwitch);
navId2.addEventListener("click", logoNavSwitch);
navId3.addEventListener("click", logoNavSwitch);
navId4.addEventListener("click", logoNavSwitch);
navId5.addEventListener("click", logoNavSwitch);

function menuBarSwitch() {
  trackButton.classList.toggle("transit");
  if (navBar.className === "menuBar") {
    navBar.className += " dropDown";
  } else {
    navBar.className = "menuBar";
    navBar.style.overflowX = "hidden";
  }
}

function logoNavSwitch() {
  if (navBar.className === "menuBar") {
    navBar.className += " dropDown";
    trackButton.classList.toggle("transit");
  }
}

function hideOut() {
  navBar.style.overflowX = "visible";
}

window.addEventListener("mouseup", function(event) {
  if (event.target != navBar && event.target.parentNode != navBar) {
    navBar.className = "menuBar";
    if (trackButton.classList.contains("transit")) {
      trackButton.classList.toggle("transit");
    }
  }
});