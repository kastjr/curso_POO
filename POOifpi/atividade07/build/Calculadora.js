"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calculadora = /** @class */ (function () {
    function Calculadora(operando_1, operando_2) {
        this.operando1 = operando_1;
        this.operando2 = operando_2;
    }
    Calculadora.prototype.soma = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.getOperando1 = function () {
        return this.operando1;
    };
    Calculadora.prototype.getOperando2 = function () {
        return this.operando2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(100, 200);
console.log("Soma = ".concat(calculadora.soma()));
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculadoraCientifica.prototype.exponenciar = function () {
        return Math.pow(this.getOperando1(), this.getOperando2());
    };
    return CalculadoraCientifica;
}(Calculadora));
var calcCientifica = new CalculadoraCientifica(30, 2);
console.log("Exponenciar = ".concat(calcCientifica.exponenciar()));
