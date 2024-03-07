const colorButton = document.getElementById('colorButton');
const message = document.getElementById('message');

colorButton.addEventListener('click', () => {
  const newColor = getRandomColor();
  colorButton.style.backgroundColor = newColor;
  colorButton.style.color = getContrastColor(newColor);
  message.style.display = 'block';
  message.textContent = '';
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getContrastColor(hexcolor) {
  const color = hexcolor.substring(1);
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}