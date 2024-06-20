// document.getElementById("menu-btn").addEventListener("click", function() {
//     var navbar = document.getElementById("navbar");
//     if (navbar.style.display === "flex") {
//         navbar.style.display = "none";
//     } else {
//         navbar.style.display = "flex";
//     }
// });

// script.js
// document.addEventListener("DOMContentLoaded", function() {
//     var dropdown = document.querySelector(".dropdown");

//     dropdown.addEventListener("mouseover", function() {
//         this.querySelector(".dropdown-menu").style.display = "block";
//     });

//     dropdown.addEventListener("mouseout", function() {
//         this.querySelector(".dropdown-menu").style.display = "none";
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdownButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target !== dropdownButton && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});




//header scrolling


