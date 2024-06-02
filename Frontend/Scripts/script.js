console.log("Script loaded correctly.")
// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");

// var sticky = navbar.scrollHeight;

// function myFunction() {
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Script loaded successfully!");
    const currentLocation = window.location.pathname;
    console.log("Current location:", currentLocation);
    const navbarLinks = document.querySelectorAll('#navbar a');

    navbarLinks.forEach(link => {
        console.log("Checking link:", link.getAttribute('href'));
        if (link.getAttribute('href').includes(currentLocation)) {
            link.classList.add('active');
            console.log("Active link added:", link);
        }
    });
});