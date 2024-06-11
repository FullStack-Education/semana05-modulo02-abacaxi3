[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZYKiVGq6)

# Dados dos Alunos - README

Este projeto consiste em uma página web para exibir informações de alunos, incluindo dados pessoais, notas em matérias e cálculos de médias. A interface utiliza HTML e JavaScript.

## Estrutura do Projeto

### Arquivos Principais

1. **index.html**: Contém a estrutura HTML da página.
2. **js/script.js**: Arquivo de script JavaScript.

## index.html

### Descrição

O arquivo `index.html` estrutura a página principal, incluindo os seguintes componentes:

- **Cabeçalho (`<head>`)**:
  - Links para Bootstrap e o arquivo CSS customizado.
  
- **Corpo (`<body>`)**:
  - **Navbar**: Barra de navegação com título "Dados dos Alunos".
  - **Container Principal**:
    - **Informações do Aluno**: Seção para exibir os dados do aluno, como nome, idade, série, escola e matéria favorita.
    - **Notas das Matérias**: Seção para listar notas das matérias com a possibilidade de adicionar novas notas.
    - **Média Geral do Aluno**: Exibição da média geral calculada das notas inseridas.
    - **Maior Média entre as Matérias**: Exibição da maior média entre todas as matérias.
    - **Lista de Alunos**: Lista de alunos simples.

### Estrutura HTML

- **Formulário de Notas**: Um formulário para adicionar novas notas de matérias.
- **Tabela de Notas**: Tabela que exibe as notas das matérias adicionadas, calculando a média automaticamente.

## js/script.js

### Funções

1. **`pedirInformacoes`**:
   - Solicita informações básicas do aluno através de prompts e confirma se os dados estão corretos. Se confirmados, insere os dados na seção "Informações do Aluno".

2. **`maiorNumero`**:
   - Recebe uma lista de números e retorna o maior número encontrado.

3. **`calcularMediaListaNumeros`**:
   - Calcula e retorna a média de uma lista de números.

4. **`submitForm`**:
   - Submissão do formulário de notas. Calcula a média das notas inseridas, adiciona a nova linha na tabela, atualiza a média geral e a maior média entre as matérias.

5. **Eventos**:
   - `window.addEventListener('load', ...)`: Executa `pedirInformacoes` ao carregar a página.
   - `document.getElementById('form-notas-materia').addEventListener('submit', ...)`: Executa `submitForm` ao submeter o formulário de notas.

### Dependências

- **Bootstrap**:
  - Utilizado para estilização rápida e responsiva da interface.

## Instruções de Uso

1. **Abrir a Página**:
   - Abra o arquivo `index.html` em um navegador web.

2. **Preencher Informações do Aluno**:
   - Ao carregar a página, preencha os prompts com as informações solicitadas sobre o aluno.

3. **Adicionar Notas**:
   - Clique no botão "Adicionar Linha" para abrir o modal e inserir notas para uma nova matéria. Submeta o formulário para adicionar a nova linha na tabela.

4. **Visualizar Médias**:
   - A média geral e a maior média entre as matérias serão calculadas e exibidas automaticamente após a adição de notas.

## Customização

- **Estilos**: Edite o arquivo `css/style.css` para customizar a aparência da página.
- **Funcionalidades**: Edite o arquivo `js/script.js` para adicionar novas funcionalidades ou alterar as existentes.

## Considerações Finais

Este projeto serve como um exemplo básico de manipulação de DOM, eventos e cálculos simples usando JavaScript, bem como a integração de Bootstrap para estilização.
Este é um mini projeto desenvolvido através do LAB365, com os seguintes estudantes:

- Gabriel Ferreira
- Ketlen Possoli
- Leandro da Silveira
- Luis Pedro
- Suzi Fortunata
