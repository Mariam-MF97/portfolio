//page loader


window.addEventListener("load", (e) => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home").classList.add("active");
  document.querySelector(".page-loader").classList.add("fade-out");

  setTimeout(() => {
     document.querySelector(".page-loader").style.display = "none";
  }, 600);
})


//toggle navbar
const navToggler = document.querySelector(".nav-toggle");
navToggler.addEventListener("click", (e) => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/*ACTIVE SECTION*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");

    if (e.target.classList.contains("nav__item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }

    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 200);
  }
});

/*TABS*/
const tabsContainer = document.querySelector(".about__tabs");
const aboutSection = document.querySelector(".about");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

/*PORTFOLIO ITEM DETAILS POPUP*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".popup__close").addEventListener("click", (e) => {
  togglePortfolioPopup();
});

function portfolioItemDetails(portfolio__item) {
  document.querySelector(".popup__photo img").src =
    portfolio__item.querySelector(".portfolio__item-photo img").src;

  document.querySelector(".popup__header h3").innerHTML =
    portfolio__item.querySelector(".portfolio__item-title").innerHTML;

  document.querySelector(".popup__body").innerHTML =
    portfolio__item.querySelector(".portfolio__item-details").innerHTML;
}

//hide popup when click outside
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup__inner")) {
    togglePortfolioPopup();
  }
});
