// Captura os elementos do DOM
const botaoTema = document.getElementById('btn-tema');
const corpoDaPagina = document.body;

// Adiciona um ouvinte de eventos ao botão
botaoTema.addEventListener('click', () => {
    // A função toggle adiciona a classe se ela não existir, e remove se ela existir
    corpoDaPagina.classList.toggle('tema-escuro');

    // Lógica para mudar o texto do botão de acordo com o tema atual
    if (corpoDaPagina.classList.contains('tema-escuro')) {
        botaoTema.textContent = '☀️ Modo Claro';
    } else {
        botaoTema.textContent = '🌙 Modo Escuro';
    }
});