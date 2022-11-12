const menuItems = document.querySelector('.menu__items')
const menuBlock = document.querySelector('.menu__block');

console.log(`${menuBlock}, ${menuItems}`)

console.log(menuBlock)
const handleClick = (e) => {
    menuBlock.classList.toggle('active');
    menuItems.classList.toggle('active__menu');
}

menuBlock.addEventListener('click', handleClick);