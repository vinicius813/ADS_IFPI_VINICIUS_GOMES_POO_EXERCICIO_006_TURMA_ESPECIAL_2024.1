class Calculadora {
    private operando_1 : number
    private operando_2 : number

    constructor(operando_1 : number, operando_2 : number) {  // Onde aqui são passados os operandos e que esses inicializam os atributos.
        this.operando_1 = operando_1
        this.operando_2 = operando_2
    }

    public somar() : number {
        return this.operando_1 + this.operando_2
    }

    public subtrair() : number {
        return this.operando_1 - this.operando_2
    }
}
// Testando a minha classe Calculadora
const calculadora : Calculadora = new Calculadora(10, 8)
                                                    // Agora irei testar a classe calculadora com seus respectivos métodos.
console.log("Logo, a minha operação soma será: ", calculadora.somar())  // 18
console.log("E também, a minha operação básica de subtração será: ", calculadora.subtrair()) //2

// Agora, irei tentar acessar meus atributos diretamente em TypeScript por meio de operando_1 e operando_2
console.log("O meu operando 1 gerará qual resultado: ", calculadora.operando_1)  // Error
console.log("Agora, o meu operando 2 gerará qual resultado em TS: ", calculadora.operando_2)  // Error

/* Explicação do erro da 1ª Questão: Tentativas de acessar os atributos operando1 e operando2 diretamente
fora da classe resultarão em erros, conforme indicado nos comentários. Isso é porque esses atributos são
privados e não podem ser acessados de fora da classe. Eles só podem ser acessados dentro da classe Calculadora. */




