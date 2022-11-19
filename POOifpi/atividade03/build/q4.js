"use strict";
var array_numeros = [1, 2, 3, 4, 5];
var array_separado = "";
array_numeros.forEach(function (item, index) {
    if (index !== array_numeros.length - 1) {
        array_separado += item + "-";
    }
    else {
        array_separado += item;
    }
});
console.log(array_separado);
