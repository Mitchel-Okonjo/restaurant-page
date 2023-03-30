function createPhone() {
  const phone = document.createElement('div');
  phone.classList.add('phone');
  phone.textContent = 'Phone: 123 456 789';

  return phone;
}

function createAddress() {
  const address = document.createElement('div');
  address.classList.add('address');
  address.textContent = 'Location: Wus 2, Abuja, Nigeria.';

  return address;
}

function createMap() {
  const map = document.createElement('img');
  map.setAttribute('src', 'images/location.jpeg');
  map.setAttribute('alt', 'Google map address');

  return map;
}

function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  const phone = createPhone();
  const address = createAddress();
  const map = createMap();

  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(map);

  return contact;
}

function loadContact() {
  const content = document.querySelector('#content');
  const contact = createContact();
  //   const header = createHeader();

  //   content.appendChild(header);
  content.appendChild(contact);
}

export { loadContact };
