function range1() {
    var rng1 = document.querySelector('#range1'),
        value = document.querySelector('.range1-value');

    value.innerHTML = rng1.value;
}

var elm = document.querySelector('#range2');
var container = elm.parentNode;
var values = elm.getAttribute('data-values').split(' ');

values.forEach(function (value, i, values) {
  var rangePart = elm.cloneNode();
  rangePart.type = 'range';
  rangePart.removeAttribute('data-values');
  rangePart.value = value;
  rangePart = container.insertBefore(rangePart, elm);
});

elm.remove();

function range2() {
  var rng2 = document.querySelector('#range2'),
      value1 = values[0],
      value2 = values[1],
      // thumb1 = document.querySelector('');
      valColor = document.querySelector('input-value').elementFromPoint(x,y);
    

    console.log (value1);
    console.log (valColor);
    console.log (value2);
}


function range3() {
    var rng3 = document.querySelector('#range3'),
        // value = document.querySelector('.range1-value');
        value = rng3.value;
        rng3.style.backgroundPosition

    value.innerHTML = rng3.value;
    console.log(value);
    console.log();
}

function what() {
  console.log(this);
}