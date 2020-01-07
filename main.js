const contentPreview = document.getElementsByClassName('content-preview')[0];
const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const backgroundColorInput = document.getElementById('background-color');

heightInput.value = getComputedStyle(contentPreview).height;
widthInput.value = getComputedStyle(contentPreview).width;
backgroundColorInput.value = getComputedStyle(contentPreview).backgroundColor;

heightInput.addEventListener('input', changeCssProperty);
widthInput.addEventListener('input', changeCssProperty);
backgroundColorInput.addEventListener('input', changeCssProperty);

function changeCssProperty(event) {
  contentPreview.style[event.target.id] = event.target.value;
}
