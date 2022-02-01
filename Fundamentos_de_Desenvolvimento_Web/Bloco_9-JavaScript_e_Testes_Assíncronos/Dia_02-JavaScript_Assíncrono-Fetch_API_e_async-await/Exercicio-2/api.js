const url = `https://api.coincap.io/v2/assets`;
const arrayCoins = [];
let coins;
const tbody = document.getElementById('tbody');

function putCoins() {
  coins.forEach(element => {
    const newLine = document.createElement('tr');
    const newCoinColumn = document.createElement('td');
    newCoinColumn.innerText = element.name
    const newSymbolColumn = document.createElement('td');
    newSymbolColumn.innerText = element.symbol
    const newValueColumn = document.createElement('td');
    newValueColumn.innerText = parseFloat(element.priceUsd).toFixed(2);
    newLine.appendChild(newCoinColumn);
    newLine.appendChild(newSymbolColumn);
    newLine.appendChild(newValueColumn);
    tbody.appendChild(newLine);
  });

}

async function getCryptos() {
  coins = await fetch(url)
  .then(response => response.json())
  .then(data => data.data)
  .catch(error => console.log(error));
  coins = coins.slice(0, 50);
  putCoins();
}

getCryptos();
