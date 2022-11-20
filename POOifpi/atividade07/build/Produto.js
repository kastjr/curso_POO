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
var Produto = /** @class */ (function () {
    function Produto(id, descricao, quantidade, valorUnitario) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }
    Produto.prototype.repor = function (quantidade) {
        this.quantidade += quantidade;
    };
    Produto.prototype.darBaixa = function (quantidade) {
        this.quantidade -= quantidade;
    };
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // "YYYY-MM-DD"
    ProdutoPerecivel.prototype["super"] = function (dataValidade) {
        this.dataValidade = new Date(dataValidade);
    };
    return ProdutoPerecivel;
}(Produto));
//let produto_perecivel: ProdutoPerecivel = new ProdutoPerecivel('2022-12-13')
var data_1 = new Date('2022-12-11');
var data_2 = new Date('2022-12-13');
//console.log(data_1.toSource())
//console.log(data_2.valueOf())
