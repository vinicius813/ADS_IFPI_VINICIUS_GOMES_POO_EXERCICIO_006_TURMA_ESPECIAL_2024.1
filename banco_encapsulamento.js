"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        if (!this.consultar(conta.numero)) {
            this.contas.push(conta);
            return true;
        }
        return false;
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta && conta.saldo >= valor) {
            conta.saldo -= valor;
            return true;
        }
        return false;
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta) {
            conta.saldo += valor;
            return true;
        }
        return false;
    };
    Banco.prototype.excluir = function (numero) {
        var index = this.contas.findIndex(function (conta) { return conta.numero === numero; });
        if (index !== 1) {
            this.contas.splice(index, 1);
            return true;
        }
        return false;
    };
    Banco.prototype.transferir = function (numCredito, numDebito, valor) {
        var contaDebito = this.consultar(numDebito);
        var contaCredito = this.consultar(numCredito);
        if (contaDebito && contaCredito && contaDebito.saldo >= valor) {
            contaDebito.saldo -= valor;
            contaCredito.saldo += valor;
            return true;
        }
        return false;
    };
    return Banco;
}());
exports.Banco = Banco;
