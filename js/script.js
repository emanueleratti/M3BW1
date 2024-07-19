document.addEventListener("DOMContentLoaded", () => {
    fetch('../nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
        });

    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });

    const menu = document.getElementById('menu');
    const sidebar = document.getElementById('sidebar');

    if (menu && sidebar) {
        const openMenu = () => {
            sidebar.classList.toggle('visible');
        };
        menu.addEventListener('click', openMenu);
    }
});