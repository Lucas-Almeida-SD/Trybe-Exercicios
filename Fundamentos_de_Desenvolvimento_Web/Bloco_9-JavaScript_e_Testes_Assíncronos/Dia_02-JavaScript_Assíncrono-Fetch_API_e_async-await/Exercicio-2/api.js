const url = `https://api.coincap.io/v2/assets`;
const arrayCoins = [];
const tbodyUS = document.getElementById('tbody');

function createTd(valueTd) {
  const td = document.createElement('td');
  td.innerText = valueTd;
  return td;
}

function createCurrencyPrice(price, symbol) {
  if (!price) {
    return '---';
  }
  let value = parseFloat(price, 10);
    value = value.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${symbol} ${value}`;
}

function putCoins(coinsUS, coinsBRL, place) {
  coinsUS.forEach((element, index) => {
    const newLine = document.createElement('tr');
    const newCoinColumn = createTd(element.name);
    const newSymbolColumn = createTd(element.symbol);
    const newValueUSColumn = createTd(createCurrencyPrice(element.priceUsd, 'U$'));
    const newValueBRLColumn = createTd(createCurrencyPrice((1 / coinsBRL[index]), 'R$'));
    newLine.appendChild(newCoinColumn);
    newLine.appendChild(newSymbolColumn);
    newLine.appendChild(newValueUSColumn);
    newLine.appendChild(newValueBRLColumn);
    place.appendChild(newLine);
  });
}

async function getCryptosBRL(coinsUS) {
  const url_base = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/brl.json`;
  try {
    const response = await fetch(url_base);
    const data = await response.json();
    const selectedCoins = coinsUS.map((element) =>
      data.brl[element['symbol'].toLowerCase()]);
    return selectedCoins;
  } catch (error) {
    console.log(error);
  }
}

async function getCryptosUS() {
  let coinsUS = await fetch(url)
  .then(response => response.json())
  .then(data => data.data)
  .catch(error => console.log(error));
  coinsUS = coinsUS.slice(0, 10);
  const coinsBRL = await getCryptosBRL(coinsUS);
  putCoins(coinsUS, coinsBRL, tbodyUS);
}

getCryptosUS();
