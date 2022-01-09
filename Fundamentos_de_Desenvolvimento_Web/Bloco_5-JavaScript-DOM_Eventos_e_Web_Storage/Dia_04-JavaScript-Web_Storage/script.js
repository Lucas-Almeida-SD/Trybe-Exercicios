// Cria lista de cores
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

// Opções de modificações de cores
const body = document.getElementsByTagName('body');
const divBackgroundColorScreen = document.querySelector('#divBackgroundColorScreen');
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

function textStyle(color) {
    for (let index = 0; index < text.length; index += 1) {
        text[index].style.color = color;
    }
}

// Escolhe o local para modicação de cor
function selectThePlace(color, place) {
    if (place === divBackgroundColorScreen) {
        bodyStyle(color);
    } else if (place === divBackgroundColorText) {
        backgroundTextStyle(color);
    } else if (place === divTextColor) {
        textStyle(color);
    }
}

// Modifica a cor do elemento com opções de cor
function changeColor(placeToSearchListOfColor, buttonToTouch) {
    function searchListOfColors() {
        let searchUlColor = document.querySelector('.listColorSelected');

        function updateColor(event) {
            let color = event.target.innerText
            selectThePlace(color, placeToSearchListOfColor);
            event.currentTarget.remove();
        }

        if (searchUlColor !== null) {
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

// Modifica o tamanho da fonte do texto
const buttonFontSize = document.querySelector('#buttonFontSize');
const divFontSize = document.querySelector('#divFontSize');

function setSizeOnParagraphs(size) {
    const paragraphs = document.getElementsByClassName('paragraph');
    for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontSize = size;
    }
}

const sizeList = ['15px', '17px', '19px', '21px', '23px'];

function addEventAtUlSize(ulSize) {
    function selectSize(event) {
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

// Modifica o espaçamento entre linhas do texto
const buttonLineHeight = document.querySelector('#buttonLineHeight');
const divLineHeight = document.querySelector('#divLineHeight');

function setLineHeightOnParagraphs(lineHeight) {
    const paragraphs = document.getElementsByClassName('paragraph');
    for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.lineHeight = lineHeight;
    }
}

const lineHeightList = ['23px', '25px', '27px', '29px', '31px'];

function addEventAtUlLineHeight(ulLineHeight) {
    function selectLineHeight(event) {
        const elementLineHeightSelected = event.target.innerText.split(' ')[3];
        const lineHeight = lineHeightList[elementLineHeightSelected - 1];
        setLineHeightOnParagraphs(lineHeight);
        event.target.parentElement.remove();
    }
    for (let index = 0; index < ulLineHeight.length; index += 1) {
        ulLineHeight[index].addEventListener('click', selectLineHeight);
    }
}

function showLineHeight() {
    const ulLineHeight = document.createElement('ul');
    ulLineHeight.id = 'ulLineHeight';
    for (let index = 0; index < 5; index += 1) {
        const liLineHeight = document.createElement('li');
        liLineHeight.className = 'lineHeight';
        liLineHeight.innerText = 'Espaçamento entre linhas ' + (index + 1);
        ulLineHeight.appendChild(liLineHeight);
    }
    divLineHeight.appendChild(ulLineHeight)
    addEventAtUlLineHeight(document.getElementsByClassName('lineHeight'));
}

function changeLineHeight() {
    function checkLineHeight() {
        const ulLineHeight = document.querySelector('#ulLineHeight');
        if (ulLineHeight === null) {
            showLineHeight();
        } else {
            ulLineHeight.remove();
        }
    }
    buttonLineHeight.addEventListener('click', checkLineHeight);
}

changeLineHeight();

// Modifica o tipo de fonte do texto
const buttonFontFamily = document.querySelector('#buttonFontFamily');
const divFontFamily = document.querySelector('#divFontFamily');

function setFontFamilyOnParagraphs(fontFamily) {
    const paragraphs = document.getElementsByClassName('paragraph');
    for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontFamily = fontFamily;
    }
}

function addEventAtUlFontFamily(ulFontFamily) {
    function selectFontFamily(event) {
        const fontFamily = event.target.innerText;
        setFontFamilyOnParagraphs(fontFamily);
        event.target.parentElement.remove();
    }
    for (let index = 0; index < ulFontFamily.length; index += 1) {
        ulFontFamily[index].addEventListener('click', selectFontFamily);
    }
}

const fontFamilyList = ['Acme', 'Fuzzy Bubbles', 'Indie Flower', 'Nosifer', 'sans-serif'];

function showFontFamily() {
    const ulFontFamily = document.createElement('ul');
    ulFontFamily.id = 'ulFontFamily';
    for (let index = 0; index < 5; index += 1) {
        const liFontFamily = document.createElement('li');
        liFontFamily.className = 'fontFamily';
        liFontFamily.innerText = fontFamilyList[index];
        liFontFamily.style.fontFamily = fontFamilyList[index]
        ulFontFamily.appendChild(liFontFamily);
    }
    divFontFamily.appendChild(ulFontFamily)
    addEventAtUlFontFamily(document.getElementsByClassName('fontFamily'));
}

function changeFontFamily() {
    function checkFontFamily() {
        const ulFontFamily = document.querySelector('#ulFontFamily');
        if (ulFontFamily === null) {
            showFontFamily();
        } else {
            ulFontFamily.remove();
        }
    }
    buttonFontFamily.addEventListener('click', checkFontFamily);
}

changeFontFamily();

// Armazena dados no localStorage
let datasOfChanges = {
    'screenColor': undefined,
    'textBgtColor': undefined,
    'textColor': undefined,
    'fontSize': undefined,
    'lineHeight': undefined,
    'fontFamily': undefined
};

function saveChanges(key, value) {
    let savedDatas = JSON.parse(localStorage.getItem('pageChanges'));
    if (savedDatas === null) {
        savedDatas = {};
    }
    savedDatas[key] = value;
    localStorage.setItem('pageChanges', JSON.stringify(savedDatas));
}

function getValueBody(event) {
    const ulBgColorScreen = event.target.nextElementSibling;
    if (ulBgColorScreen !== null) {
        function addEventAtulBackgroundColorScreen(event) {
            const colorOfScreen = event.target.innerText;
            saveChanges('screenColor', colorOfScreen);
        }
        ulBgColorScreen.addEventListener('click', addEventAtulBackgroundColorScreen);
    }
}
buttonBackgroundColorScreen.addEventListener('click', getValueBody);

function getValueBgColorText(event) {
    const ulBgColorText = event.target.nextElementSibling;
    if (ulBgColorText !== null) {
        function addEventAtulBgColorText(event) {
            const colorOfTextBg = event.target.innerText;
            saveChanges('textBgtColor', colorOfTextBg);
        }
        ulBgColorText.addEventListener('click', addEventAtulBgColorText);  
    }
}
buttonBackgroundColorText.addEventListener('click', getValueBgColorText);

function getValueTextColor(event) {
    const ulcolorOfText = event.target.nextElementSibling;
    if (ulcolorOfText !== null) {
        function addEventAtulcolorOfText(event) {
            const colorOfText = event.target.innerText;
            saveChanges('textColor', colorOfText);
        }
        ulcolorOfText.addEventListener('click', addEventAtulcolorOfText);
    } 
}
buttonTextColor.addEventListener('click', getValueTextColor);

function getValueFontSize(event) {
    const ulsizeOfFont = event.target.nextElementSibling;
    if (ulsizeOfFont !== null) {
        function addEventAtulsizeOfFont(event) {
            let sizeOfFont = event.target.innerText;
            sizeOfFont = sizeList[sizeOfFont.split(' ')[1] - 1];
            saveChanges('fontSize', sizeOfFont);
        }
        ulsizeOfFont.addEventListener('click', addEventAtulsizeOfFont);
    } 
}
buttonFontSize.addEventListener('click', getValueFontSize);

function getValueLineHeight(event) {
    const ulheightOfLine = event.target.nextElementSibling;
    if (ulheightOfLine !== null) {
        function addEventAtulheightOfLine(event) {
            let heightOfLine = event.target.innerText;
            heightOfLine = lineHeightList[heightOfLine.split(' ')[3] - 1];
            saveChanges('lineHeight', heightOfLine);
        }
        ulheightOfLine.addEventListener('click', addEventAtulheightOfLine);
    }
}
buttonLineHeight.addEventListener('click', getValueLineHeight);

function getValueFontFamily(event) {
    const ultypeOfFont = event.target.nextElementSibling;
    if (ultypeOfFont !== null) {
        function addEventAtultypeOfFont(event) {
            const typeOfFont = event.target.innerText;
            saveChanges('fontFamily', typeOfFont);
        }
        ultypeOfFont.addEventListener('click', addEventAtultypeOfFont);
    }
}
buttonFontFamily.addEventListener('click', getValueFontFamily);

// Carregar dados salvos no storage
function loadSavedDatas() {
    const datasOfLocalStorage = JSON.parse(localStorage.getItem('pageChanges'));
    if(datasOfLocalStorage!== null) {
        if (datasOfLocalStorage.screenColor !== undefined) {
            bodyStyle(datasOfLocalStorage['screenColor']);
        }
    }
    if(datasOfLocalStorage !== null) {
        if (datasOfLocalStorage.textBgtColor !== undefined) {
            backgroundTextStyle(datasOfLocalStorage['textBgtColor']);
        }
    }
    if(datasOfLocalStorage !== null) {
        if (datasOfLocalStorage.textColor !== undefined) {
            textStyle(datasOfLocalStorage['textColor']);
        }
    }
    if(datasOfLocalStorage !== null) {
        if (datasOfLocalStorage.fontSize !== undefined) {
            setSizeOnParagraphs(datasOfLocalStorage['fontSize']);
        }
    }
    if(datasOfLocalStorage !== null) {
        if (datasOfLocalStorage.lineHeight !== undefined) {
            setLineHeightOnParagraphs(datasOfLocalStorage['lineHeight']);
        }
    }
    if(datasOfLocalStorage !== null) {
        if (datasOfLocalStorage.fontFamily !== undefined) {
            setFontFamilyOnParagraphs(datasOfLocalStorage['fontFamily']);
        }    
    }
};
window.onload = loadSavedDatas();
