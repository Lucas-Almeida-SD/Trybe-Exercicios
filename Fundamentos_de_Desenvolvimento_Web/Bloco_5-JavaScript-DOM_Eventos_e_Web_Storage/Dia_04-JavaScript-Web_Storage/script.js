function showColors(classOfList) {
    let arrayOfColors = ['white', 'black', 'green', 'blue', 'red', 'yellow', 'orange'];
    let ulColor = document.createElement('ul');
    ulColor.classList.add('listColor', classOfList);
    for (let color of arrayOfColors) {
        let liColor = document.createElement('li');
        liColor.className = 'color';
        liColor.innerText = color;
        liColor.style.color = 'rgb(70, 70, 70)';
        liColor.style.backgroundColor = color;
        ulColor.appendChild(liColor)
    }
    return ulColor;
}

const body = document.getElementsByTagName('body');
const divBackgroundColorScreen = document.querySelector ('#divBackgroundColorScreen');
const buttonBackgroundColorScreen = document.querySelector('#buttonBackgroundColorScreen');
function bodyStyle(color) {
    for (let index = 0; index < body.length; index += 1) {
        body[index].style.backgroundColor = color;
    }
}

const backgroundText = document.getElementsByClassName('backgroundText');
const divBackgroundColorText = document.querySelector('#divBackgroundColorText');
const buttonBackgroundColorText = document.querySelector('#buttonBackgroundColorText');
function backgroundTextStyle(color) {
    for (let index = 0; index < backgroundText.length; index += 1) {
        backgroundText[index].style.backgroundColor = color;
    }
}

const text = document.getElementsByClassName('text');
const divTextColor = document.querySelector('#divTextColor');
const buttonTextColor = document.querySelector('#buttonTextColor');
function TextStyle(color) {
    for (let index = 0; index < text.length; index += 1) {
        text[index].style.color = color;
    }
}


function selectThePlace(color, place) {
    if (place === divBackgroundColorScreen) {
        bodyStyle(color);
    } else if (place === divBackgroundColorText) {
        backgroundTextStyle(color);
    } else if (place === divTextColor) {
        TextStyle(color);
    }
}
        

function changeColor(placeToSearchListOfColor, buttonToTouch) {
    function searchListOfColors() {
        let searchUlColor = document.querySelector('.listColorSelected');

        function updateColor(event) {
            let color = event.target.innerText
            selectThePlace(color, placeToSearchListOfColor);
            event.currentTarget.remove();
        }

        if (searchUlColor !== null){
            placeToSearchListOfColor.removeChild(searchUlColor);
        } else {
            ulColor = showColors('listColorSelected');
            placeToSearchListOfColor.appendChild(ulColor);
            ulColor.addEventListener('click', updateColor);
        }

        
    }

    buttonToTouch.addEventListener('click', searchListOfColors);
}

changeColor(divBackgroundColorScreen, buttonBackgroundColorScreen);
changeColor(divBackgroundColorText, buttonBackgroundColorText);
changeColor(divTextColor, buttonTextColor);

const buttonFontSize = document.querySelector('#buttonFontSize');
const divFontSize = document.querySelector('#divFontSize');

function setSizeOnParagraphs(size) {
    const paragraphs = document.getElementsByClassName('paragraph');
    for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontSize = size;
    }
}

function addEventAtUlSize(ulSize) {
    function selectSize(event) {
        const sizeList = ['15px', '17px', '19px', '21px', '23px'];
        const elementSizeSelected = event.target.innerText.split(' ')[1];
        const size = sizeList[elementSizeSelected - 1];
        setSizeOnParagraphs(size);
        event.target.parentElement.remove();
    }
    for (let index = 0; index < ulSize.length; index += 1) {
        ulSize[index].addEventListener('click', selectSize);
    }
}

function showFontSize() {
    const ulSize = document.createElement('ul');
    ulSize.id = 'textSizeList';
    for (let index = 0; index < 5; index += 1) {
        const size = document.createElement('li');
        size.className = 'textFontSize';
        size.innerText = 'Tamanho ' + (index + 1);
        ulSize.appendChild(size); 
    }
    divFontSize.appendChild(ulSize)
    addEventAtUlSize(document.getElementsByClassName('textFontSize'));
}

function changeFontSize() {
    function checkSizeList() {
        const ulSize = document.querySelector('#textSizeList');
        if (ulSize === null) {
            showFontSize();
        } else {
            ulSize.remove();
        }
    }
    buttonFontSize.addEventListener('click', checkSizeList);
}

changeFontSize();
