# Exercício - Dia 4 - Usando o Redux no React - Actions Assíncronas

## Bônus

Como Redux exige muita prática, eis aqui mais um exercício! Desta vez, um mini-projeto para se desenvolver e guardar no portfólio!

Conhece o __Reddit__ ? É uma comunidade na qual pessoas conseguem criar grupos de discussão acerca de algum assunto. Tal grupo é chamado de `subreddit` . Para cada `subreddit` pessoas podem fazer postagens ( `posts` ). Como exercício, você vai fazer uma aplicação que permite a quem usá-la ver `posts` referentes a `2 subreddits` :

  - reactjs
  - frontend

Sua aplicação deve permitir a quem usá-la poder escolher de qual `subreddit` se deseja ver as postagens. No momento que selecionar o `subreddit` , uma requisição precisa ser feita no `reddit` para buscar os `posts` referentes ao `subreddit` escolhido. Para cada postagem você precisa mostrar __pelo menos__ o título do post . Além disso, sua aplicação deve permitir a quem usá-la a possibilidade de __atualizar__ a lista de postagens referentes ao `subreddit` escolhido.

É __obrigatório__ que você gerencie o estado de sua aplicação com __Redux__ , guardando os `subreddits` , assim como os `posts` de cada `subreddit` , no `store` . Você precisa fazer uso do `redux-thunk` para permitir criar `actions` assíncronas.

__Pontos importantes:__

1. Para buscar os `posts` referentes a um `subreddit` , você pode fazer uma requisição `GET` para `https://www.reddit.com/r/< subreddit >.json` . Ou seja, se você precisar buscar `posts` do `subreddit reactjs` , você faria uma chamada para `https://www.reddit.com/r/reactjs.json` .

    - No `json` retornado você encontra os dados referentes aos `posts` dentro da propriedade `data.children` . Para cada post dentro de `data.children` você encontra seu título correspondente na propriedade `data.title` .

2. Antes de começar a sair implementando, __pare__ e __pense__ sobre __como__ desenhar o estado da sua aplicação. O que você precisa guardar no estado? Como você vai __estruturar__ e __organizar__ seus dados? Quais `actions` você precisa ter para __modelar__ os eventos que ocorrerão na sua aplicação (fazer uma requisição, obter sua resposta, atualizar a lista, etc...)? Como você vai organizar seus `reducers` (lembrando que __NUNCA__ deve-se alterar o estado, e sim __criar__ um novo )?

3. Como você está fazendo uma requisição de um recurso externo, o que acontece se a requisição de postagens referentes a um `subreddit` falhar? Adicione na sua aplicação tratamento de erro para esses casos, salvando no estado da sua aplicação a mensagem de erro para o `subreddit` correspondente. Dica: procure e __investigue__ no Google como fazer tratamento de erro de requisição no contexto de __Redux__ .

4. Como forma de ter um melhor diagnóstico sobre o fluxo de dados em uma aplicação __Redux__ , instale o middleware `redux-logger` e o integre na sua aplicação.

5. Instale a extensão do Chrome __redux-dev-tools__ e a integre na sua aplicação. Com isso, você tem um ambiente completo para poder analisar e depurar sua aplicação. 🚀

É mostrada em sequência uma sugestão de implementação da aplicação.

<img src='./images/modelo.gif' alt='Exemplo dos exercícios feitos'>