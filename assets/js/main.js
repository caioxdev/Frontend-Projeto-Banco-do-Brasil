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


// Modal quando apertar Sair

const button = document.querySelector(".logout-modal")
const modal = document.querySelector("dialog")
const buttonSim = document.querySelector(".btn-sim")
const buttonClose = document.querySelector("dialog .btn-nao")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}

const ctx = document.getElementById('grafico').getContext('2d');

const data = {
    labels: ['Segunda', 'Terça', 'Quarta'], 
    datasets: [
        {
            label: 'API 1',
            data: [12, 8, 15], 
            backgroundColor: 'rgba(54, 162, 235, 0.7)'
        },
        {
            label: 'API 2',
            data: [7, 14, 10],
            backgroundColor: 'rgba(240, 242, 28, 0.85)'
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            x: { stacked: false },
            y: { beginAtZero: true }
        }
    }
};

new Chart(ctx, config);