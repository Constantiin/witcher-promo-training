const burgerMenu = (obj) => {
    const {
        selectorBurger = '.burger',
        burgerActive = 'burgerActive',
        selectorMenu,
        menuActive
    } = obj
    
    const burger = document.querySelector(selectorBurger);
    const menu = document.querySelector(selectorMenu);

    burger.addEventListener('click', () => {
        burger.classList.toggle(burgerActive);
        menu.classList.toggle(menuActive);
    })
}

export default burgerMenu;