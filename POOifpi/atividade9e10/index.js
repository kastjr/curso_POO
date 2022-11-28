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
exports.__esModule = true;
var banco_1 = require("./banco");
var ClasseAbstrata = /** @class */ (function () {
    function ClasseAbstrata() {
    }
    return ClasseAbstrata;
}());
var ClasseConcreta = /** @class */ (function (_super) {
    __extends(ClasseConcreta, _super);
    function ClasseConcreta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClasseConcreta.prototype.imprimaAlgo = function () {
        console.log("Hello");
    };
    return ClasseConcreta;
}(ClasseAbstrata));
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    return FiguraGeometrica;
}());
var Quadrado = /** @class */ (function () {
    function Quadrado(lado) {
        this._lado = lado;
    }
    //pesquisem sobre callback hell e vejam o motivo de eu não ter aninhado if e elses
    Quadrado.prototype.comparar = function (figuraGeometrica) {
        if (this.calcularArea() < figuraGeometrica.calcularArea()) {
            return -1;
        }
        if (this.calcularArea() > figuraGeometrica.calcularArea()) {
            return 1;
        }
        if (this.calcularArea() == figuraGeometrica.calcularArea()) {
            return 0;
        }
        return NaN;
    };
    Quadrado.prototype.calcularArea = function () {
        return this._lado * this._lado;
    };
    Quadrado.prototype.calcularPerimetro = function () {
        return this._lado * 4;
    };
    return Quadrado;
}());
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this._raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * this._raio * this._raio;
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this._raio;
    };
    return Circulo;
}());
var circulo = new Circulo(3);
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());
var figuras = new Array();
figuras[0] = circulo;
var Funcionario = /** @class */ (function () {
    function Funcionario(salario) {
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.getBonificacao = function () {
        return this.salario * 0.40;
    };
    return Gerente;
}(Funcionario));
var Diretor = /** @class */ (function (_super) {
    __extends(Diretor, _super);
    function Diretor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Diretor.prototype.getBonificacao = function () {
        return this.salario * 0.60;
    };
    return Diretor;
}(Gerente));
var Presidente = /** @class */ (function (_super) {
    __extends(Presidente, _super);
    function Presidente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Presidente.prototype.getBonificacao = function () {
        return 2 * this.salario + 1000;
    };
    return Presidente;
}(Funcionario));
var gerente = new Gerente(1000);
var diretor = new Diretor(1000);
var presidente = new Presidente(1000);
console.log(gerente.getBonificacao());
console.log(diretor.getBonificacao());
console.log(presidente.getBonificacao());
var quadrado = new Quadrado(2);
console.log(quadrado.comparar(circulo));
var conta = new banco_1.ContaCorrente("1", 200);
var seguro1 = new banco_1.SeguroDeVida();
var seguro2 = new banco_1.SeguroDeVida();
var auditoriaInterna = new banco_1.AuditoriaInterna();
auditoriaInterna.adicionar(conta);
auditoriaInterna.adicionar(seguro1);
auditoriaInterna.adicionar(seguro2);
console.log(auditoriaInterna.calcularTributos());
