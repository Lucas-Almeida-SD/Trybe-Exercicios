# Exercício - Dia 2 - Usando o Redux no React

Esse é um projeto para o conteúdo da semana 15, sobre `Redux com react`.

## COMEÇANDO OS EXERCÍCIOS

Dica: Use o Redux Devtools para ver o estado da sua aplicação em seu navegador.

### Exercício 1

Como primeira tarefa, você deve usar o **Redux** para gerenciar o estado do componente `TrafficSignal`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

A função `renderSignal` retorna o src da imagem do sinal de trânsito e recebe como parâmetro uma string que deve vir da store.

O componente `TrafficSignal` tem três botões e ao clique de cada um deles, a sua respectiva luz deve acender.

---

### Exercício 2

Como segunda tarefa, você deve usar o **Redux** para gerenciar o estado do componente `Cars`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

Seu reducer deve ter 3 estados, `redCar`, `blueCar` e `yellowCar` e os 3 devem ser booleanos. Ao clicar no botão `Move`, o estado de seu respectivo carro deve mudar para que o carro ande. Já fizemos todo o CSS para que você se preocupe apenas com a lógica do exercício, ele encontra-se no arquivo `App.css`.

---

### Exercício 3

Como terceira tarefa, você deve juntar seus 2 reducers anteriores em um único reducer, usando o `combineReducers`. Talvez haja uma mudança 
no estado de seu reduce, então certifique-se que ambos os componentes continuem funcionando após a união.

