import { Conta } from "./conta_encapsulamento";

export class Banco {
    private contas : Conta[] = []

    public inserir(conta : Conta) : boolean {
            if (!this.consultar(conta.numero)) {
                this.contas.push(conta)
            return true
            }
            return false
    }
    private consultar(numero : string) : Conta {
        let contaProcurada : Conta
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c
                break
            }
        }
        return contaProcurada
    }

    private consultarIndice(numero : string) : number {
        let indiceProcurado : number = -1
        for (let i : number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i
                break
            }
        }
        return indiceProcurado
    }

    public sacar(numero : string, valor : number) : boolean {
        let conta = this.consultar(numero);
        if (conta && conta.saldo >= valor) {
            conta.saldo -= valor;
            return true;
        }
            return false;
    }

    public depositar(numero : string, valor : number) : boolean {
        let conta = this.consultar(numero);
        if (conta) {
            conta.saldo += valor;
            return true;
        }
        return false;
    }

    public excluir(numero : string) : boolean {
        let index = this.contas.findIndex(conta => conta.numero === numero)
        if (index !== 1) {
            this.contas.splice(index, 1);
            return true;
        }
            return false;
    }

    public transferir(numCredito : string, numDebito : string, valor : number) : boolean {
        let contaDebito = this.consultar(numDebito);
        let contaCredito = this.consultar(numCredito);
        if (contaDebito && contaCredito && contaDebito.saldo >= valor) {
            contaDebito.saldo -= valor;
            contaCredito.saldo += valor;
            return true;
        }
            return false;
    }
}
