window.addEventListener("DOMContentLoaded", (event) => {
    var items = document.querySelectorAll(".item");
  
    function checkVisibility() {
      // Comprobar visibilidad de los elementos .item
      items.forEach(function (item) {
        var position = item.getBoundingClientRect();
  
        // Si el objeto está dentro del viewport
        if (position.top < window.innerHeight * 0.8) {
          item.classList.add("visible");
        }
      });
      
    }
  
    // Comprueba la visibilidad al cargar la página y al hacer scroll
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
  
    // Resto del código...
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };
  
    // Shrink the navbar
    navbarShrink();
  
    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);
  
    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        rootMargin: "0px 0px -40%",
      });
    }
  
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  });
  