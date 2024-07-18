const menu = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')

const openMenu = () => {
  sidebar.classList.toggle('visible')
}

menu.addEventListener('click', openMenu)