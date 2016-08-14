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


function range3() {
    var rng3 = document.querySelector('#range3'),
        // value = document.querySelector('.range1-value');
        value = rng3.value;

    value.innerHTML = rng3.value;
    console.log(value)
}