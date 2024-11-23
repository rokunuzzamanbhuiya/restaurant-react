(function () {
  ("use strict");

  /*
  Template Name: Restaurant Website - Taste The Authentic Saudi Cuisine
  Author: Rokunuzzaman Bhuiya
  Description: Restaurant Website - Taste The Authentic Saudi Cuisine
  File Description: Main JS file of the template
*/

  /*=============================================
	=    		Preloader			      =
=============================================*/
  function preloader() {
    document.getElementById("preloader").style.display = "none";
  }

  window.addEventListener("load", function () {
    preloader();
  });

  /*=============================================
	=        Mouse Active          =
=============================================*/
  const sliderDrag = document.querySelectorAll(".slider-drag");
  const mouseCursor = document.querySelector(".mouseCursor");

  sliderDrag.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      mouseCursor.classList.add("cursor-big");
    });
    element.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-big");
    });
  });

  const interactiveElements = document.querySelectorAll("a, .sub-menu, button");

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      mouseCursor.classList.add("opacity-0");
    });
    element.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("opacity-0");
    });
  });

  // Mouse Custom Cursor
  function itCursor() {
    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");

    if (cursorInner && cursorOuter) {
      document.body.addEventListener("mousemove", (e) => {
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });

      document.body.addEventListener("mouseenter", (e) => {
        if (e.target.matches("button, a, .cursor-pointer")) {
          cursorInner.classList.add("cursor-hover");
          cursorOuter.classList.add("cursor-hover");
        }
      });

      document.body.addEventListener("mouseleave", (e) => {
        if (e.target.matches("button, a, .cursor-pointer")) {
          cursorInner.classList.remove("cursor-hover");
          cursorOuter.classList.remove("cursor-hover");
        }
      });

      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";
    }
  }
  itCursor();

  //   /*=============================================
  // 	=    		Mobile Menu			      =
  // =============================================*/
  //   // Offcanvas toggle
  //   document
  //     .querySelector(".ts-offcanvas-toogle")
  //     ?.addEventListener("click", () => {
  //       document
  //         .querySelector(".ts-offcanvas")
  //         .classList.add("ts-offcanvas-open");
  //       document
  //         .querySelector(".ts-offcanvas-overlay")
  //         .classList.add("ts-offcanvas-overlay-open");
  //     });

  //   document
  //     .querySelectorAll(
  //       ".ts-offcanvas-close-toggle, .ts-offcanvas-overlay, .ts-click-close"
  //     )
  //     .forEach((element) => {
  //       element.addEventListener("click", () => {
  //         document
  //           .querySelector(".ts-offcanvas")
  //           .classList.remove("ts-offcanvas-open");
  //         document
  //           .querySelector(".ts-offcanvas-overlay")
  //           .classList.remove("ts-offcanvas-overlay-open");
  //       });
  //     });

  //   // Mobile menu
  //   const tsMenuWrap = document
  //     .querySelector(".ts-mobile-menu-active > ul")
  //     ?.cloneNode(true);
  //   const tsSideMenu = document.querySelector(".ts-offcanvas-menu nav");

  //   if (tsSideMenu && tsMenuWrap) {
  //     tsSideMenu.appendChild(tsMenuWrap);

  //     const subMenus = tsSideMenu.querySelectorAll(".sub-menu, .ts-mega-menu");

  //     subMenus.forEach((menu) => {
  //       const button = document.createElement("button");
  //       button.className = "ts-menu-close";
  //       button.innerHTML = '<i class="fas fa-chevron-right"></i>';
  //       menu.parentElement.appendChild(button);
  //     });

  //     const sideMenuList = tsSideMenu.querySelectorAll(
  //       "button.ts-menu-close, li.has-dropdown > a"
  //     );

  //     sideMenuList.forEach((menuItem) => {
  //       menuItem.addEventListener("click", (e) => {
  //         e.preventDefault();
  //         const parent = menuItem.parentElement;

  //         if (!parent.classList.contains("active")) {
  //           parent.classList.add("active");
  //           parent.querySelector(".sub-menu, .ts-mega-menu").style.display =
  //             "block";
  //         } else {
  //           parent.classList.remove("active");
  //           parent.querySelector(".sub-menu, .ts-mega-menu").style.display =
  //             "none";
  //         }
  //       });
  //     });
  //   }

  /*=============================================
  	=    Menu sticky      =
  =============================================*/
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const stickyHeader = document.getElementById("ts-sticky-header");

    if (stickyHeader) {
      if (scroll < 245) {
        stickyHeader.classList.remove("ts-sticky-menu");
      } else {
        stickyHeader.classList.add("ts-sticky-menu");
      }
    }
  });

  /*=============================================
  	=    Scroll to top      =
  =============================================*/
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const scrollToTarget = document.querySelector(".scroll-to-target");

    if (scrollToTarget) {
      if (scroll < 245) {
        scrollToTarget.classList.remove("open");
      } else {
        scrollToTarget.classList.add("open");
      }
    }
  });

  /*=============================================
	=    		Scroll Up  	         =
=============================================*/
  const scrollToTarget = document.querySelector(".scroll-to-target");

  if (scrollToTarget) {
    scrollToTarget.addEventListener("click", () => {
      const targetId = scrollToTarget.getAttribute("data-target");
      const target = document.querySelector(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }

  /*=============================================
	=       Data Background Image 		      =
=============================================*/
  document.querySelectorAll("[data-background]").forEach((element) => {
    const bg = element.getAttribute("data-background");
    if (bg) element.style.backgroundImage = `url(${bg})`;
  });

  /*=============================================
	=       Data Background Color 		      =
=============================================*/
  document.querySelectorAll("[data-bg-color]").forEach((element) => {
    const bgColor = element.getAttribute("data-bg-color");
    if (bgColor) element.style.backgroundColor = bgColor;
  });

  /*=============================================
	=       Data Color 		      =
=============================================*/
  document.querySelectorAll("[data-color]").forEach((element) => {
    const color = element.getAttribute("data-color");
    if (color) element.style.color = color;
  });
})();
