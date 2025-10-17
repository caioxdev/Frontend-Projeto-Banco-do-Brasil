document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');

    const sidebarLinks = sidebar.querySelectorAll('a');
    const currentPath = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const linkPath = href.split('/').pop().toLowerCase();

        if (linkPath === currentPath) {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
