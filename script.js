const onlyButton = document.querySelector('button');
const alertIcon = document.querySelector('.alert')

const hideDot = function() {
    const alertDot = document.querySelector('.notification-dot')
    alertDot.classList.toggle('hide-dot');
}

const openMenu = function () {
    const theMenu = document.querySelector('.drop-down-menu');
    theMenu.classList.toggle('closed');
}

onlyButton.addEventListener('click', openMenu)
alertIcon.addEventListener('click', hideDot);