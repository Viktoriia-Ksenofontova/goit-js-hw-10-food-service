import menuTemplate from '../templates/menu_items.hbs';
import menu from '../menu.json';

const markup = menuTemplate(menu);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);