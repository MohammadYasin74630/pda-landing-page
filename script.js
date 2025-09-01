// for hamburger menu
const menuButton = document.querySelector(".menu-button");
const menuDiv = document.querySelector(".moblie-menu");
const closeBtn = document.querySelector(".moblie-menu .close-button");

// Open menu
menuButton.addEventListener("click", () => {
    menuDiv.style.transform = "translateX(0px)"
    document.body.classList.add("lock-scroll");
})

// Close menu
closeBtn.addEventListener("click", () => {
    menuDiv.style.transform = "translateX(100%)"
    document.body.classList.remove("lock-scroll");
})

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (!menuDiv.contains(event.target) && !menuButton.contains(event.target)) {
        menuDiv.style.transform = "translateX(100%)";
        document.body.classList.remove("lock-scroll");
    }
});