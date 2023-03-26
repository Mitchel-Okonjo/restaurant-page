function createNav() {
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");

  for (let i = 1; i <= 3; i++) {
    const navItem = document.createElement("div");
    navItem.classList.add("nav-item");

    i === 1
      ? (navItem.textContent = "Home")
      : i === 2
      ? (navItem.textContent = "Menu")
      : (navItem.textContent = "Contact");

    navBar.appendChild(navItem);
  }

  return navBar;
}

function createTitle() {
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Maison De Riz";

  return title;
}

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const navBar = createNav();
  const title = createTitle();
  header.appendChild(title);
  header.appendChild(navBar);

  return header;
}

function createHomeContent() {
  const home = document.createElement("div");
  home.classList.add("home");

  const div1 = document.createElement("div");
  div1.textContent = "Welcome to Maison de Riz, the House of Rice!";
  home.appendChild(div1);

  const image = document.createElement("img");
  image.setAttribute("src", "images/home-image.jpg");
  image.setAttribute("alt", "Logo image");
  home.appendChild(image);

  const div2 = document.createElement("div");
  div2.textContent = "Order online or visit us!";
  home.appendChild(div2);

  return home;
}

function loadHome() {
  const content = document.querySelector("#content");
  const header = createHeader();
  content.appendChild(header);

  const homeContent = createHomeContent();
  content.appendChild(homeContent);
}

export { loadHome, createHeader };
