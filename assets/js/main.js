document.addEventListener('DOMContentLoaded', () => {
    // Sidebar
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
    }); // Final Sidebar

    // Modal Sair
    const button = document.querySelector(".logout-modal");
    const modal = document.querySelector(".dialog-sair");
    const buttonClose = document.querySelector(".dialog-sair .btn-nao");

    button.onclick = () => modal.showModal();
    buttonClose.onclick = () => modal.close();

    // Fim Modal Sair

    // Modal Adicionar API
    const btnAdicionar = document.querySelector('.btn-adicionar');
    const dialogAdicionar = document.querySelector('.dialog-adicionar');
    const btnCancelarAdd = document.querySelector('.btn-cancelar-add');

    if(btnAdicionar && dialogAdicionar && btnCancelarAdd){
        btnAdicionar.addEventListener('click', () => dialogAdicionar.showModal());
        btnCancelarAdd.addEventListener('click', () => dialogAdicionar.close());
    } // Fim Modal Adicionar APi

    // Drag & Drop
    const dropZone = document.getElementById('drop-zone');
    const overlay = document.getElementById('overlay-drag');
    const fileInput = document.getElementById('file-input');

    if(dropZone && overlay && fileInput){
        const dropText = dropZone.querySelector('.container-text-add');
        dropText.addEventListener('click', () => fileInput.click());

        fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            overlay.style.opacity = 1;
        });

        dropZone.addEventListener('dragleave', () => overlay.style.opacity = 0);

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            overlay.style.opacity = 0;
            handleFiles(e.dataTransfer.files);
        });

        function handleFiles(files){
            if(!files.length) return;
            for(let file of files){
                console.log('Arquivo selecionado:', file.name, file.type, file.size);
            }
        }
    } // fim Drag & Drop

    // Botões Cadastrar/Cancelar
    const btnCadastrar = document.querySelector('.btn-cadastrar-add');
    if(btnCadastrar){
        btnCadastrar.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('Arquivos cadastrados com sucesso!');
            dialogAdicionar.close();
        });
    } // fim Botões Cadastrar/Cancelar

    // Gráfico
    const canvas = document.getElementById('grafico');
    if(canvas){
        const ctx = canvas.getContext('2d');

        const data = {
            labels: ['Segunda', 'Terça', 'Quarta'],
            datasets: [
                { label: 'API 1', data: [12, 8, 15], backgroundColor: 'rgba(54, 162, 235, 0.7)' },
                { label: 'API 2', data: [7, 14, 10], backgroundColor: 'rgba(240, 242, 28, 0.85)' }
            ]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                scales: { x: { stacked: false }, y: { beginAtZero: true } }
            }
        };

        new Chart(ctx, config);
    }
}); // fim Gráfico