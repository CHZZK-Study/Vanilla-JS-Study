import axios from './node_modules/axios/dist/esm/axios.min.js';

const categoryButtons = document.querySelectorAll('nav ul li');
const menuList = document.querySelector('main');

const menus = await axios.get('./menu.json').then((result) => result.data);
const Breakfast = menus.filter((menu) => menu.type === 'Breakfast');
const Lunch = menus.filter((menu) => menu.type === 'Lunch');
const Shakes = menus.filter((menu) => menu.type === 'Shakes');

categoryButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const type = event.target.getAttribute('id');
    if (type === 'All')
      menuList.insertAdjacentHTML(
        'afterbegin',
        menus.reduce((acc, cur) => {
          acc += createMenuItem(cur.menu, cur.price, cur.description, cur.src);
          return acc;
        }, ``)
      );
    console.log(menuList);
  });
});

const createMenuItem = (title, price, description, src) => {
  return `<div class="menu_wrapper">
    <img src=${src} alt=${title} />
    <div class="menu_item">
      <div class="menu_detail">
        <h3>${title} Pancakes</h3>
        <span class="menu_price">$${price}</span>
      </div>
      <p class="menu_description">
        ${description}
      </p>
    </div>
  </div>`;
};
