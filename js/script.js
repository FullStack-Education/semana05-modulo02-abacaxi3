//Exercício 02
window.addEventListener('load', function() {
    pedirInformacoes();
});

//Exercício 03
function pedirInformacoes() {
    let nome = prompt("Qual o nome do aluno?", "Digite o nome.");
    let idade = prompt("Qual a idade do aluno?", "Digite a idade.");
    let serie = prompt("Qual a série do aluno?", "Digite a série.");
    let escola = prompt("Qual a escola do aluno?", "Digite o nome da escola.");
    let materiaFav = prompt("Qual sua matéria favorita?", "Digite o nome da matéria");

    let msgConfirm = "Os dados informados estão corretos?\n" +
    "Nome: " + nome + "\n" +
    "Idade: " + idade + "\n" +
    "Série: " + serie + "\n" +
    "Escola: " + escola + "\n" +
    "Matéria favorita: " + materiaFav;

    let confirmar = confirm(msgConfirm);

    if (confirmar) {
        let informacoesAlunoDiv = document.getElementById('informacoesAluno');
        informacoesAlunoDiv.innerHTML = `
        <h4>Informações do Aluno</h4>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Série:</strong> ${serie}</p>
        <p><strong>Escola:</strong> ${escola}</p>
        <p><strong>Matéria Favorita:</strong> ${materiaFav}</p>
        `;

    } else {
        document.write("Os dados não foram confirmados. Por favor, preencha as informações novamente.")
    }
}