const widthLabel = document.createElement('div');
widthLabel.id = 'width-label';
setWidth();
window.addEventListener('resize', setWidth);
document.body.insertBefore(widthLabel, document.body.firstChild);
function setWidth() {
  widthLabel.textContent = window.innerWidth;
}

const labelTagets = document.getElementsByClassName('test');
for(const e of labelTagets){
  const label = document.createElement('span');
  const style = window.getComputedStyle(e);
  const text = `${e.className}
${style['min-width']}`;
  label.textContent = text;
  e.insertBefore(label, e.firstChild);
}
