// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }
// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }
 // Function to toggle the menu
    function toggleMenu() {
      const menu = document.querySelector(".menu-links"); // Select the menu
      const icon = document.querySelector(".hamburger-icon"); // Select the hamburger icon

      // Toggle the 'open' class on the menu and icon
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }

    // Add an event listener to the hamburger icon
    document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);



    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Show/hide the scroll arrow based on scroll position
    window.addEventListener("scroll", () => {
      const scrollArrow = document.getElementById("scrollArrow");
      if (window.scrollY > 200) {
        scrollArrow.classList.add("visible");
      } else {
        scrollArrow.classList.remove("visible");
      }
    });