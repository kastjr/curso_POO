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
exports.ResultadoBatalha = exports.CenarioDeBatalha = exports.BaseMilitar = exports.Guerreiro = void 0;
var JaEliminadoException = /** @class */ (function (_super) {
    __extends(JaEliminadoException, _super);
    function JaEliminadoException(mensagem) {
        return _super.call(this, mensagem) || this;
    }
    return JaEliminadoException;
}(Error));
var Guerreiro = /** @class */ (function () {
    function Guerreiro(_id, _descricao, _forcaDeAtaque, _life) {
        if (_life === void 0) { _life = 10; }
        this._id = _id;
        this._descricao = _descricao;
        this._forcaDeAtaque = _forcaDeAtaque;
        this._life = _life;
    }
    Guerreiro.prototype.estaEliminado = function () {
        return this._life <= 0;
    };
    Guerreiro.prototype.defenderAtaque = function (valorAtaque) {
        this._life = this._life - valorAtaque;
    };
    Guerreiro.prototype.atacar = function (defensivel) {
        if (defensivel.estaEliminado()) {
            throw new JaEliminadoException('Já eliminado');
        }
        defensivel.defenderAtaque(this._forcaDeAtaque);
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
var BaseMilitar = /** @class */ (function () {
    function BaseMilitar(_id, _x, _y, _percentualDeDanos) {
        if (_percentualDeDanos === void 0) { _percentualDeDanos = 0; }
        this._id = _id;
        this._x = _x;
        this._y = _y;
        this._percentualDeDanos = _percentualDeDanos;
    }
    BaseMilitar.prototype.estaEliminado = function () {
        return this._percentualDeDanos >= 90;
    };
    BaseMilitar.prototype.defenderAtaque = function (valorAtaque) {
        this._percentualDeDanos = this._percentualDeDanos + valorAtaque;
    };
    return BaseMilitar;
}());
exports.BaseMilitar = BaseMilitar;
var ResultadoBatalha;
(function (ResultadoBatalha) {
    ResultadoBatalha["EXERCITO1"] = "Ex\u00E9rcito 01";
    ResultadoBatalha["EXERCITO2"] = "Ex\u00E9rcito 02";
    ResultadoBatalha["EMPATE"] = "Empate";
})(ResultadoBatalha || (ResultadoBatalha = {}));
exports.ResultadoBatalha = ResultadoBatalha;
var CenarioDeBatalha = /** @class */ (function () {
    function CenarioDeBatalha() {
    }
    CenarioDeBatalha.prototype.avaliar = function (exercito1, exercito2) {
        var totalEliminados1 = 0;
        for (var i = 0; i < exercito1.length; i++) {
            if (exercito1[i].estaEliminado()) {
                totalEliminados1++;
            }
        }
        var totalEliminados2 = 0;
        for (var i = 0; i < exercito2.length; i++) {
            if (exercito2[i].estaEliminado()) {
                totalEliminados2++;
            }
        }
        var resultado;
        if (totalEliminados1 < totalEliminados2) {
            resultado = ResultadoBatalha.EXERCITO1;
        }
        else if (totalEliminados1 > totalEliminados2) {
            resultado = ResultadoBatalha.EXERCITO2;
        }
        else {
            resultado = ResultadoBatalha.EMPATE;
        }
        return resultado;
    };
    return CenarioDeBatalha;
}());
exports.CenarioDeBatalha = CenarioDeBatalha;
