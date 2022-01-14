const showClickCount = document.querySelector('#qtde-clicks');
let clickCount;

// Função para pegar o valor armazenado no localStorage e inserir no Input de 
// quantidade de clicks.
const getValueAtStorage = () => {
  let getValue = JSON.parse(localStorage.getItem('savedClicks'));
  showClickCount.innerText = getValue;
}
getValueAtStorage();

// Função para verificar a quantidade de clicks no Input
const checkClick = () => {
  clickCount = (showClickCount.innerText === '') ? 0 : parseInt(showClickCount.innerText);
}

// Função para alterar a quantidade de clicks conforme o botão for clickado.
const btn = document.querySelector('#btn');
const sumClick = () => {
  checkClick();
  clickCount += 1;
  showClickCount.innerText = clickCount;
  localStorage.setItem('savedClicks', JSON.stringify(clickCount));
}
btn.addEventListener('click', sumClick);

