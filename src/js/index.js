// OBJETIVO 1 - quando clicar no butao do personagem na lista, marcar o botao como selecionado
// passo 1 - pegar os botoes no JS para poder verificar quando o usuario clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");

// OBJETIVO 2 - quando clicar no botao do personagem mostrar as informacoes do personagem 
//passo 1 - pegar os personagems no JS para poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // passo 3 - verificar se ja existe um botao selecionado, se sim, devemos remover a selecao dele
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
    // passo 2 - adicionar a clase 'selecionado' no botao que o usuario clicou
    botao.classList.add('selecionado');

    // passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a selecao dele
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');

    // passo 2 - adicionar a classe 'selecionado no personagem que o usuario selecionou'
    personagens[indice].classList.add('selecionado');
  });
});



