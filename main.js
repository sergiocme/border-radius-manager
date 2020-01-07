const contentPreview = document.getElementsByClassName('content-preview')[0];

const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const backgroundColorInput = document.getElementById('background-color');

const topRightInput = document.getElementById('border-top-right-radius');
const topLeftInput = document.getElementById('border-top-left-radius');
const bottomRightInput = document.getElementById('border-bottom-right-radius');
const bottomLeftInput = document.getElementById('border-bottom-left-radius');

heightInput.value = getComputedStyle(contentPreview).height;
widthInput.value = getComputedStyle(contentPreview).width;
backgroundColorInput.value = getComputedStyle(contentPreview).backgroundColor;

topRightInput.value = 0;
topLeftInput.value = 0;
bottomLeftInput.value = 0;
bottomRightInput.value = 0;

heightInput.addEventListener('input', changeCssProperty);
widthInput.addEventListener('input', changeCssProperty);
backgroundColorInput.addEventListener('input', changeCssProperty);

topRightInput.addEventListener('input', changeCssProperty);
topLeftInput.addEventListener('input', changeCssProperty);
bottomLeftInput.addEventListener('input', changeCssProperty);
bottomRightInput.addEventListener('input', changeCssProperty);

function changeCssProperty(event) {
  contentPreview.style[event.target.id] = event.target.value;
}
