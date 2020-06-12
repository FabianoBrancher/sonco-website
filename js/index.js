const sideMenu = document.querySelector('.sidemenu');
const closeBtn = document.querySelector('.sidemenu__link--close');

const toggleSideMenu = () => {
  const menu = document.querySelector('.mobile-menu')
  menu.addEventListener('click', () => {
    sideMenu.classList.toggle('sidemenu--open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('sidemenu--open');
  })
}

const app = () => {
  toggleSideMenu();
}

app();


