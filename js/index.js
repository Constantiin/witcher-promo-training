import renderTabs from "./renderTabs.js";
import burgerMenu from "./burger.js";
import switchTabs from "./tabs.js";

renderTabs();

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 425px
        425: {
            slidesPerView: 2,
          },
        // when window width is >= 850px
        850: {
          slidesPerView: 4,
        }
      }
});

burgerMenu({
    selectorMenu: '.navigation__list',
    menuActive: 'navigation__list_active',
});

switchTabs({
    selectorTabsButtons: '.tabs__btn',
    activeClassButton: 'tabs__btn_active',
    selectorTabsItem: '.tabs__item',
    activeClassItem: 'tabs__item_active',
    callback: renderTabs,
});