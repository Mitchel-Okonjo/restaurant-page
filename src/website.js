import { loadHome, loadHeader } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

function initializeWebsite() {
  loadHeader();
  loadHome();

  const nav = document.querySelectorAll(".nav-item");
  nav.forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      clearPage();
      focusNav(e.target);
      displayHome(e.target);
      displayMenu(e.target);
      displayContact(e.target);
    });
  });
}

function displayHome(navItem) {
  if (isDisplayed(navItem)) return;

  if (navItem.textContent === "Home") {
    loadHome();
    const home = document.querySelector(".home");
    home.classList.add("active");
  }
}

function displayMenu(navItem) {
  if (isDisplayed(navItem)) return;

  if (navItem.textContent === "Menu") {
    loadMenu();
    const menu = document.querySelector(".menu");
    menu.classList.add("acive");
  }
}

function displayContact(navItem) {
  if (isDisplayed(navItem)) return;

  if (navItem.textContent === "Contact") {
    loadContact();
    const contact = document.querySelector(".contact");
    contact.classList.add("active");
  }
}

function clearPage() {
  const content = document.querySelector("#content");
  const current = document.querySelector("#content").lastChild;
  content.removeChild(current);
}

function isDisplayed(navItem) {
  const navPick = navItem.textContent;
  const content = document.querySelector("#content");
  const currentPage = content.lastChild;

  if (navPick === "Home" && currentPage.matches(".home")) return true;
  if (navPick === "Menu" && currentPage.matches(".menu")) return true;
  if (navPick === "Contact" && currentPage.matches(".contact")) {
    return true;
  }

  return false;
}

function focusNav(navItem) {
  const nav = document.querySelectorAll(".nav-item");
  nav.forEach((navButton) => {
    navButton.classList.remove("active");
  });

  navItem.classList.add("active");
}

export { initializeWebsite };
