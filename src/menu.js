function setPrice(amount) {
  const price = document.createElement('div');
  price.classList.add('dish-price');
  price.textContent = `$${amount}`;

  return price;
}

function setDishComp(components) {
  const dishComp = document.createElement('div');
  dishComp.classList.add('dish-comp');
  dishComp.textContent = `${components}`;

  return dishComp;
}

function setDishTitle(title) {
  const dishTitle = document.createElement('div');
  dishTitle.classList.add('dish-title');
  dishTitle.textContent = `${title}`;

  return dishTitle;
}

function setDishImage(url, alt) {
  const dishImage = document.createElement('img');
  dishImage.setAttribute('src', url);
  dishImage.setAttribute('alt', alt);

  return dishImage;
}

function createDish(url, alt, title, components, amount) {
  const image = setDishImage(url, alt);
  const dishTitle = setDishTitle(title);
  const dishComp = setDishComp(components);
  const price = setPrice(amount);

  const dish = document.createElement('div');
  dish.classList.add('dish');
  dish.appendChild(image);
  dish.appendChild(dishTitle);
  dish.appendChild(dishComp);
  dish.appendChild(price);

  return dish;
}

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  return menu;
}

function loadMenu() {
  const content = document.querySelector('#content');
  const menu = createMenu();

  for (let i = 0; i <= 5; i++) {
    const dish = createDish(
      'images/jollof-rice.jpeg',
      'Jollof Rice',
      'Jollof Rice',
      'Jollof rice, chicken, fried plantains',
      '20.00'
    );

    menu.appendChild(dish);
  }
  content.appendChild(menu);
}

export { loadMenu };
