const display = document.getElementById('display');

function append(val) {
  if (display.innerText === '0') display.innerText = '';
  display.innerText += val;
}

function clearAll() {
  display.innerText = '0';
}


function calculate() {
  try {
    let result = eval(display.innerText.replace('%', '/100'));
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}
