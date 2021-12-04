# Exercícios - Dia 5 - JavaScript - DOM e seletores #

Nestes exercícios foram colocados em prática os conhecimentos obtidos no dia, nos quais foram sobre como o HTML se comunica com o JavaScript, utlizando o DOM para essa finalidade, fazendo-se uso do objeto __document__ e aplicando métodos como `getElementByID`, `getElementByClassName`, `getElementByTagName`, `querySelector` e `querySelectorAll` através do javascript. 
O enunciado das questões estão todos postos abaixo.
___


### Fixação ###

Vamos consolidar a manipulação dos elementos HTML , colocando a cor do Administrador de Tempo da Trybe como na imagem abaixo usando apenas o JavaScript!

![Imagem do exercicio de Fixacao!](Imagens/Administrador_de_Tempo_da_Trybe.png "Administrador de Tempo da Trybe ")

- Você vai precisar usar o que aprendeu sobre getElementBy e querySelector para colocar em prática.
Antes de iniciar, crie um arquivo HTML na pasta e copie o código abaixo:

        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Administrador do Tempo</title>
        </head>
        <body id="container">
            <header id="header-container">
            <h1>Administrador do Tempo da Trybe</h1>
            </header>

            <section class="emergency-tasks">
            <div>
                <h3>Urgente e Importante</h3>
            </div>
            <div>
                <h3>Urgente e Não-Importante</h3>
            </div>
            </section>

            <section class="no-emergency-tasks">
            <div>
                <h3>Não-Urgente e Importante</h3>
            </div>
            <div>
                <h3>Não-Urgente e Não-Importante</h3>
            </div>
            </section>

            <footer id="footer-container">
            <div>&copy; Trybe</div>
            </footer>
            <script src="script.js"></script>
        </body>
        </html>

- Crie também um arquivo CSS e copie o código abaixo para adicionar estilo à página. Fique a vontade para soltar a criatividade e alterar o arquivo como desejar!

        * {
        margin: 0;
        }

        #container {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        }

        #header-container {
        color: white;
        padding: 20px;
        }

        .emergency-tasks {
        display: inline-block;
        height: 400px;
        margin: 56px 0;
        width: 400px;
        }

        .emergency-tasks div {
        height: 198px;
        }
        .emergency-tasks h3 {
        color: white;
        margin-top: 10px;
        padding: 10px;
        }

        .no-emergency-tasks {
        display: inline-block;
        height: 400px;
        width: 400px;
        }

        .no-emergency-tasks div {
        height: 198px;
        }

        .no-emergency-tasks h3 {
        color: white;
        margin-top: 10px;
        padding: 10px;
        }

        #footer-container {
        color: white;
        font-weight: 700;
        padding: 15px;
        text-align: center;
        }

- Crie um arquivo JavaScript com o nome de "script.js" na pasta e coloque seus conhecimentos de getElementBy e querySelector em prática.
___

### Exercício ###

- Crie um arquivo HTML dentro do diretório e copie o código a seguir.

        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width" />
            <title>Exercício 5.1</title>
            
            <style>
            main, section {
                border-color: black;
                border-style: solid;
            }

            .title {
                text-align: center;
            }

            .main-content {
                background-color: yellow;
            }

            .main-content .center-content {
                background-color: red;
                width: 50%;
                margin: 0 auto;
            }

            .main-content .center-content p {
                font-style: italic;
            }
            </style>
        </head>
        <body>
            <header> 
            <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
            </header>    
            <main class="main-content">
            <section class="center-content">
                <p>Texto padrão do nosso site</p>
                <p>-----</p>
                <p>Trybe</p>
            </section>
            </main>
            <script>
                /*
                Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
                - document.getElementById()
                - document.getElementsByClassName()
                - document.getElementsByTagName()
                1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
                2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
                3. Crie uma função que mude a cor do quadrado vermelho para branco.
                4. Crie uma função que corrija o texto da tag <h1>.
                5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
                6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
                */
            </script>
        </body>
        </html>

- Leia as instruções que estão dentro de um comentário na tag `<script>`.
