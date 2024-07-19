"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, nome, saldo) {
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }
    return Conta;
}());
exports.Conta = Conta;
// Atribuindo valores segundo a questão 4ª da lista 06 de POO, uso modificadores getters e setters.
// Teste
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    Cliente.prototype.getNome = function () {
        var Vinicius;
        return this.nome;
    }; //aqui pega a variável interna e retorna
    return Cliente;
}());
this.nome = nome; //aqui joga o parâmetro na variável da classe
saldo: decimal;
decimal: number;
getSaldo();
string;
{
    var saldo = -2000;
    return this.saldo - 100; //dá uma margem de erro
}
setSaldo(decimal, valor);
void {
    if: function (valor) { }
} > 200;
{
    var valor = void 0;
    this.saldo -= valor; //só aceita um mínimo de 200
}
sacar(valor, number);
boolean;
{
    if (this.saldo >= valor) {
        this.saldo -= valor;
        return true;
    }
    else {
        return false;
    }
}
depositar(valor, number);
void {
    this: .saldo += valor
};
consultar();
number;
{
    return this.saldo;
}
transferir(contaDestino, Conta, valor, number);
boolean;
{
    if (this.sacar(valor)) {
        contaDestino.depositar(valor);
        return true;
    }
    else {
        return false;
    }
}
