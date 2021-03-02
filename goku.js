const turnOn = document.getElementById ('turnOn');
const turnOff  = document.getElementById ('turnOff');
const normal = document.getElementById('normal');

function isFormHurt () {
  return normal.src.indexOf ('quebra')  >  -1
}

function formOn () {
  if  ( !isFormHurt () ){
  normal.src = './img/saiyajin.jpg';
  }
}

function formOff () {
  if  ( !isFormHurt () ){
  normal.src = './img/normal.png';
  }
}

function formHurt (){
  normal.src = './img/quebra.png';
}

turnOn.addEventListener ('click', formOn);
turnOff.addEventListener ('click', formOff);
normal.addEventListener('dblclick', formHurt);

