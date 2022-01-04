// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventDeafaultHref(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener('click', preventDeafaultHref);

function preventDeafaultInputCheckbox(event) {
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', preventDeafaultInputCheckbox);

function preventDeafaultInputText(event) {
  if (event.key !== 'a') {
    event.preventDefault();
  }
}
INPUT_TEXT.addEventListener('keydown', preventDeafaultInputText);