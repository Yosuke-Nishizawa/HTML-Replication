const widthLabel = document.createElement('div');
widthLabel.id = 'width-label';
setWidth();
window.addEventListener('resize', setWidth);
document.body.insertBefore(widthLabel, document.body.firstChild);
function setWidth() {
  widthLabel.textContent = window.innerWidth;
}

const labelTagets = document.querySelectorAll('body div');
// const labelTagets = document.getElementsByClassName('test');
for(const e of labelTagets){
  const label = document.createElement('span');
  label.className = 'label';
  const style = window.getComputedStyle(e);
  const event = function() {
    const text = `${e.classList[0]}\n${style['min-width']}~${style['max-width']}\n${style['width']}`;
    label.textContent = text;
  }
  event();
  window.addEventListener('resize', event);
  e.insertBefore(label, e.firstChild);
  // const tooltip = document.createElement('span');
  // tooltip.className = 'tooltip';
  // tooltip.textContent = e.className;
  // tooltip.style.display = 'hidden';
  // label.appendChild(tooltip);
  // label.addEventListener('mouseenter', function() {
  //   tooltip.style.display = 'block';
  // });
  // label.addEventListener('mouseleave', function() {
  //   tooltip.style.display = 'hidden';
  // });
}
