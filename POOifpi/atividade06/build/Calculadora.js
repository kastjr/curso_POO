"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(operando_1, operando_2) {
        this._operando1 = operando_1;
        this._operando2 = operando_2;
    }
    Calculadora.prototype.soma = function () {
        return this._operando1 + this._operando2;
    };
    Calculadora.prototype.subtrai = function () {
        return this._operando1 - this._operando2;
    };
    return Calculadora;
}());
var calc = new Calculadora(1, 2);
console.log("Soma: ".concat(calc.soma()));
console.log("Subtra\u00E7\u00E3o: ".concat(calc.subtrai()));
// console.log(`_operando1: ${calc._operando1}`) erro (atributo privado)
