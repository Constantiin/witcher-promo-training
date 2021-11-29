import renderTabs from "./renderTabs.js";
import burgerMenu from "./burger.js";
import switchTabs from "./tabs.js";
import "./videotube.min.js";

renderTabs();

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    navigation: {
      nextEl: ".tabs__arrow_right",
      prevEl: ".tabs__arrow_left",
      disabledClass: "tabs__arrow_disable"
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 425px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        // when window width is >= 850px
        850: {
          slidesPerView: 4,
          spaceBetween: 30,
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