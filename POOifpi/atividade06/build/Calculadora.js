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
// console.log(`operando1: ${calc._operando1}`) erro (atributo privado)
// console.log(`operando2: ${calc._operando2}`) erro (atributo privado)
// Ambos atributos sao privados por isso no codigo principal , em forma de encapsular ou proteger o codigo, não é possivel acessar esses atributos.
