// Dica extra
const dicasExtras = [
    "Invista em energia renovável na sua produção.",
    "Faça a reciclagem de resíduos internamente.",
    "Monitore indicadores de sustentabilidade regularmente.",
    "Incentive funcionários a adotarem práticas verdes."
];

const btnDica = document.getElementById('btnDica');
const dicaExtra = document.getElementById('dicaExtra');

btnDica.addEventListener('click', () => {
    const indice = Math.floor(Math.random() * dicasExtras.length);
    dicaExtra.textContent = dicasExtras[indice];
});

// Formulário
const form = document.getElementById('formContato');
const resposta = document.getElementById('resposta');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resposta.textContent = `Obrigado, ${form.nome.value}! Sua mensagem foi recebida.`;
    form.