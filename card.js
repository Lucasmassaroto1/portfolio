document.addEventListener("DOMContentLoaded", function() {
    const projetos = document.querySelectorAll('.card');
    let projetoAtual = 0;

    // Função para mostrar dois projetos de uma vez e esconder os outros
    function mostrarProjetos(index) {
        projetos.forEach((projeto, i) => {
            if (i >= index && i < index + 2) {
                projeto.style.display = 'flex';
            } else {
                projeto.style.display = 'none';
            }
        });
    }

    // Exibir os primeiros dois projetos ao carregar a página
    mostrarProjetos(projetoAtual);

    // Event listeners para os botões
    const btnAnterior = document.querySelector('.proximoprojeto button:first-child');
    const btnProximo = document.querySelector('.proximoprojeto button:last-child');

    btnAnterior.addEventListener('click', function() {
        if (projetoAtual > 0) {
            projetoAtual -= 2;
            mostrarProjetos(projetoAtual);
        }
    });

    btnProximo.addEventListener('click', function() {
        if (projetoAtual < projetos.length - 2) {
            projetoAtual += 2;
            mostrarProjetos(projetoAtual);
        }
    });
});

/*document.addEventListener("DOMContentLoaded", function() {
    const projetos = document.querySelectorAll('.card');
    let projetoAtual = 0;
    // Função para mostrar o projeto atual e esconder os outros
    function mostrarProjeto(index) {
        projetos.forEach((projeto, i) => {
            if (i === index) {
                projeto.style.display = 'flex';
            } else {
                projeto.style.display = 'none';
            }
        });
    }
    // Exibir o primeiro projeto ao carregar a página
    mostrarProjeto(projetoAtual);
    // Event listeners para os botões
    const btnAnterior = document.querySelector('.proximoprojeto button:first-child');
    const btnProximo = document.querySelector('.proximoprojeto button:last-child'); btnAnterior.addEventListener('click', function() {
        if (projetoAtual > 0) {
            projetoAtual--;       mostrarProjeto(projetoAtual);
        }
    }); btnProximo.addEventListener('click', function() {
        if (projetoAtual < projetos.length - 1) {
            projetoAtual++;
            mostrarProjeto(projetoAtual);
        }
    });
});*/
