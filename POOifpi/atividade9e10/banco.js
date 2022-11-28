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
exports.ContaImposto = exports.Poupanca = exports.Banco = exports.Conta = exports.AuditoriaInterna = exports.SeguroDeVida = exports.ContaCorrente = void 0;
var execoes_1 = require("./execoes");
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        //this.validarValor(saldo);
        this._numero = numero;
        this._saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        this.validarValor(valor);
        if (this._saldo < valor) {
            throw new execoes_1.SaldoInsuficienteError("Saldo insuficiente.");
        }
        this._saldo = this._saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.validarValor(valor);
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.validarValor = function (valor) {
        if (isNaN(valor) || valor <= 0) {
            throw new execoes_1.ValorInvalidoError("Valor inválido: + " + valor);
        }
        return true;
    };
    return Conta;
}());
exports.Conta = Conta;
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, saldo, taxaDeJuros) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaDejuros = taxaDeJuros;
        return _this;
    }
    Object.defineProperty(Poupanca.prototype, "taxaDeJuros", {
        get: function () {
            return this._taxaDejuros;
        },
        enumerable: false,
        configurable: true
    });
    Poupanca.prototype.renderJuros = function () {
        var saldo = this.saldo;
        this.depositar(saldo * this.taxaDeJuros / 100);
    };
    return Poupanca;
}(Conta));
exports.Poupanca = Poupanca;
var ContaImposto = /** @class */ (function (_super) {
    __extends(ContaImposto, _super);
    function ContaImposto(numero, saldo, taxaDeDesconto) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaDeDesconto = taxaDeDesconto;
        return _this;
    }
    ContaImposto.prototype.sacar = function (valor) {
        var valorTotal = valor + valor * this._taxaDeDesconto / 100;
        _super.prototype.sacar.call(this, valorTotal);
    };
    return ContaImposto;
}(Conta));
exports.ContaImposto = ContaImposto;
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.calculaTributos = function () {
        return this.saldo * 0.10;
    };
    return ContaCorrente;
}(Conta));
exports.ContaCorrente = ContaCorrente;
var SeguroDeVida = /** @class */ (function () {
    function SeguroDeVida() {
    }
    SeguroDeVida.prototype.calculaTributos = function () {
        return 50.00;
    };
    return SeguroDeVida;
}());
exports.SeguroDeVida = SeguroDeVida;
var AuditoriaInterna = /** @class */ (function () {
    function AuditoriaInterna() {
        this._tributaveis = [];
    }
    AuditoriaInterna.prototype.adicionar = function (tributavel) {
        this._tributaveis.push(tributavel);
    };
    AuditoriaInterna.prototype.calcularTributos = function () {
        var total = 0.0;
        for (var i = 0; i < this._tributaveis.length; i++) {
            total = total + this._tributaveis[i].calculaTributos();
        }
        return total;
    };
    return AuditoriaInterna;
}());
exports.AuditoriaInterna = AuditoriaInterna;
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        try {
            this.consultar(conta.numero);
            throw new execoes_1.ContaJaCadastradaError("Conta j\u00E1 cadastrada: ".concat(conta.numero));
        }
        catch (e) {
            if (e instanceof execoes_1.ContaJaCadastradaError) {
                throw e;
            }
            this._contas.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                contaProcurada = this._contas[i];
            }
        }
        if (!contaProcurada) {
            throw new execoes_1.ContaNaoEncontradaError("Conta não encontrada: " + numero);
        }
        return contaProcurada;
    };
    Banco.prototype.consultarComFilter = function (numero) {
        return this._contas.filter(function (conta) { return conta.numero == numero; })[0];
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new execoes_1.ContaNaoEncontradaError("Conta não encontrada: " + numero);
        }
        return indiceProcurado;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        this._contas[indice] = conta;
    };
    Banco.prototype.depositar = function (numero, valor) {
        var indice = this.consultarPorIndice(numero);
        this._contas[indice].depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var indice = this.consultarPorIndice(numero);
        this._contas[indice].sacar(valor);
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        for (var i = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        this._contas.pop();
    };
    Banco.prototype.transferir = function (numeroDebito, numeroCredito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
    };
    Banco.prototype.calcularQuantidadeContas = function () {
        return this._contas.length;
    };
    Banco.prototype.calcularTotalSaldos = function () {
        var totalSaldo = 0;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            totalSaldo += conta.saldo;
        }
        return totalSaldo;
    };
    Banco.prototype.calcularMediaSaldos = function () {
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
    };
    Banco.prototype.renderJuros = function (numero) {
        var contaProcurada = this.consultar(numero);
        if (!(contaProcurada instanceof Poupanca)) {
            throw new execoes_1.PoupancaInvalidaError("Poupan\u00E7a inv\u00E1lida: ".concat(numero));
        }
        contaProcurada.renderJuros();
    };
    Banco.prototype.listaContas = function () {
        var listaStrings = '';
        for (var i = 0; i < this._contas.length; i++) {
            listaStrings = listaStrings +
                ' Numero: ' + this._contas[i].numero +
                ' - Saldo: ' + this._contas[i].saldo + '\n';
        }
        return listaStrings;
    };
    return Banco;
}());
exports.Banco = Banco;
