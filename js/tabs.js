const switchTabs = (obj) => {
    const {
        selectorTabsButtons,
        activeClassButton,
        selectorTabsItem,
        activeClassItem,
        callback = () => {},
    } = obj;

    const tabsButtons = document.querySelectorAll(selectorTabsButtons);
    const tabsItems = document.querySelectorAll(selectorTabsItem);

    tabsButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            for (let i = 0; i < tabsButtons.length; i++) {
                if (tabsButtons[i] === btn) {
                    tabsButtons[i].classList.add(activeClassButton);
                    tabsItems[i].classList.add(activeClassItem);
                    callback(i);
                } else {
                    tabsButtons[i].classList.remove(activeClassButton);
                    tabsItems[i].classList.remove(activeClassItem);
                };
            };
        });
    });

};

export default switchTabs;