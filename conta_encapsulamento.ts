export class Conta {
    private numero : string
    private nome : string
    private saldo : number

    constructor(numero : string, nome : string, saldo : number) {
        this.numero = numero
        this.nome = nome
        this.saldo = saldo
    }
}
// Atribuindo valores segundo a questão 4ª da lista 06 de POO, uso modificadores getters e setters.
// Teste
    class Cliente { //exemplo bem meia boa
    private nome : string;//note que é privado
    public getNome() : string {
        let Vinicius : string => return this.nome; 
    }//aqui pega a variável interna e retorna
    public setNome(string nome) : void => this.nome = nome; //aqui joga o parâmetro na variável da classe
    private saldo : decimal;
    public decimal : number 
    public getSaldo() : string {
        let saldo = -2000 => return this.saldo - 100; //dá uma margem de erro
    }public setSaldo(decimal valor) : void {
            if (valor > 200) {
        let valor : number => this.saldo -= valor; //só aceita um mínimo de 200
    }
}
    
    public sacar(valor : number) : boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return true;
        }else{
         return false;
        }
    }

    public depositar(valor : number) : void {
        this.saldo += valor
    }

    public consultar() : number {
        return this.saldo
    }

    public transferir(contaDestino : Conta, valor : number) : boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor)
            return true
        } else {
            return false
         }
    }
    }
