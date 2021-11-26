import burgerMenu from "./burger.js";
import tabs from "./tabs.js";

burgerMenu({
    selectorMenu: '.navigation__list',
    menuActive: 'navigation__list_active',
});

tabs({
    selectorTabsButtons: '.tabs__btn',
    activeClassButton: 'tabs__btn_active',
    selectorTabsItem: '.tabs__item',
    activeClassItem: 'tabs__item_active',
});