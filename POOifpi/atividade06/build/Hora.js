"use strict";
var Hora = /** @class */ (function () {
    function Hora(hora, minuto, segundo) {
        this.horas = hora;
        this.minutos = minuto;
        this.segundos = segundo;
    }
    Hora.prototype.lerHora = function () {
        return this.horas;
    };
    Hora.prototype.lerMinuto = function () {
        return this.minutos;
    };
    Hora.prototype.lerSegundo = function () {
        return this.segundos;
    };
    Hora.prototype.lerHorario = function () {
        return "".concat(this.horas, ":").concat(this.minutos, ":").concat(this.segundos);
    };
    return Hora;
}());
var hora = new Hora(13, 0, 38);
console.log("Hora: ".concat(hora.lerHora()));
console.log("Minuto: ".concat(hora.lerMinuto()));
console.log("Segundo: ".concat(hora.lerSegundo()));
console.log("Hor\u00E1rio: ".concat(hora.lerHorario()));
