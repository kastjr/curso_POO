"use strict";
var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        return "".concat(this.texto, ", ").concat(this.destinatario);
    };
    return Saudacao;
}());
var saudacao1 = new Saudacao("ola", "Kastier");
console.log(saudacao1.obterSaudacao());
