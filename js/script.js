
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