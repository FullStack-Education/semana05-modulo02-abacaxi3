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


function calcularMedia(notasArray) {
    let soma = 0;

    for (let i = 0; i < notasArray.length; i++) {
        soma += notasArray[i];
    }
    // Calcular a média
    let media = soma / notasArray.length;
    return media;
}

function submitForm(event){
    event.preventDefault();

    var materia = document.getElementById('materia').value;
    let notas =[]

    notas.push(parseFloat(document.getElementById('nota1').value));
    notas.push(parseFloat(document.getElementById('nota2').value));
    notas.push(parseFloat(document.getElementById('nota3').value));
    notas.push(parseFloat(document.getElementById('nota4').value));
    var media = calcularMedia(notas).toFixed(1); 
    


    var newRow = '<tr>' +
    '<td>' + materia + '</td>' +
    '<td>' + notas[0] + '</td>' +
    '<td>' + notas[1] + '</td>' +
    '<td>' + notas[2] + '</td>' +
    '<td>' + notas[3] + '</td>' +
    '<td>' + media + '</td>' +
    '</tr>';


    document.getElementById('notasTabela').innerHTML += newRow;
    document.getElementById('closeModal').click()
    document.getElementById('form-notas-materia').reset();
}


document.getElementById('form-notas-materia').addEventListener('submit', this.submitForm)

//Exercício 02
window.addEventListener('load',this.pedirInformacoes);


