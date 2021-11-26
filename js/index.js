import burgerMenu from "./burger.js";
import switchTabs from "./tabs.js";
import renderTabs from "./renderTabs.js";

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

renderTabs(); // проверить надо ли