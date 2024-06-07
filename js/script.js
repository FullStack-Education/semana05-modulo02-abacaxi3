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


function calcularMediaListaNumeros(listaNumeros) {
    let soma = 0;

    for (let i = 0; i < listaNumeros.length; i++) {
        soma += listaNumeros[i];
    }
    // Calcular a média
    let media = soma / listaNumeros.length;
    return media;
}

var medias = [];

function submitForm(event){
    event.preventDefault();

    var materia = document.getElementById('materia').value;
    let notas =[]

    notas.push(parseFloat(document.getElementById('nota1').value));
    notas.push(parseFloat(document.getElementById('nota2').value));
    notas.push(parseFloat(document.getElementById('nota3').value));
    notas.push(parseFloat(document.getElementById('nota4').value));
    var mediaNumerica = calcularMediaListaNumeros(notas)
    var media = mediaNumerica.toFixed(1); 
    
    medias.push(mediaNumerica)

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

    let mediaGeral = document.getElementById('mediaGeralAluno');
    mediaGeral.innerText = 'A média geral do aluno é: ' + calcularMediaListaNumeros(medias).toFixed(1);
}


document.getElementById('form-notas-materia').addEventListener('submit', this.submitForm)


//Exercício 02
window.addEventListener('load',function(event){
  this.pedirInformacoes();
  this.imprimeMaiorMedia([1,3,5,7,10]);
});


function maiorNumero (listaNumeros){
  let maiorNumero = -99999

  for (let i = 0; i < listaNumeros.length; i++) {
        

  if(listaNumeros[i]>maiorNumero){
    maiorNumero = listaNumeros [i]
  } 

  }
  return maiorNumero;
}
function  imprimeMaiorMedia(listaMedias){
  let maiorMedia = this.maiorNumero(listaMedias)
  document.getElementById('maiorMedia').innerHTML = maiorMedia
}


