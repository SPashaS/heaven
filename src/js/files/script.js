// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



// const header = document.querySelector('.header');

// header.addEventListener('click', function(e) {
//   let target = e.target;
  
//   let menuItem = target.classList.contains('menu-item__item-title');
//   let menuItemOpen = target.closest('.submenu-open');
//   if (menuItem && !menuItemOpen) {
//     closeOpenSubMenu();
//     target.closest('.menu-item').classList.add('submenu-open');
//   } else if (menuItem && menuItemOpen) {
//     target.closest('.menu-item').classList.remove('submenu-open');
//   }
// })

// export function closeOpenSubMenu() {
//   let submenuOpen = document.querySelector('.submenu-open');
//   if (submenuOpen) {
//     submenuOpen.classList.remove('submenu-open');
//   }
// }


// const itemsBody = document.querySelectorAll('.item-services__body');

// if (itemsBody) {
//   itemsBody.forEach(el => {
//     const btn = el.querySelector('.item-services__body-promo .item-services__btn');
//     btn.addEventListener('click', () => {
//       el.querySelector('.item-services__body-promo').classList.add('hidden');
//       el.querySelector('.item-services__body-info').classList.remove('hidden');
//     })
//   });
// }


const lang = document.querySelector('.lang');
if(lang) {
  lang.querySelector('.lang__btn').addEventListener('click', () => {
    lang.classList.toggle('lang_open');
  })
}



