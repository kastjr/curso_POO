"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(operando_1, operando_2) {
        this.operando1 = operando_1;
        this.operando2 = operando_2;
    }
    Calculadora.prototype.soma = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.subtrai = function () {
        return this.operando1 - this.operando2;
    };
    return Calculadora;
}());
var calc = new Calculadora(100, 200);
console.log("Soma: ".concat(calc.soma()));
console.log("Subtra\u00E7\u00E3o: ".concat(calc.subtrai()));
// console.log(`_operando1: ${calc._operando1}`) erro (atributo privado)
