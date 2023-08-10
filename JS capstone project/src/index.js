import './style.css';
import getData from './modules/mealDisplay';
import showPopupCategories from './modules/show-popup-category';
import showPopupContacts from './modules/popup-contact';

getData();

const menuCat = document.getElementById('menu-variety');
menuCat.addEventListener('click', () => {
  showPopupCategories();
});

const menuCont = document.getElementById('contacts');
menuCont.addEventListener('click', () => {
  showPopupContacts();
});
