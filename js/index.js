import renderTabs from "./renderTabs.js";
import burgerMenu from "./burger.js";
import switchTabs from "./tabs.js";

renderTabs();

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