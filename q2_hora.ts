class Hora {
    private horas : number
    private minutos : number
    private segundos : number

    constructor(horas : number, minutos : number, segundos : number) {
         this.horas = horas
         this.minutos = minutos
         this.segundos = segundos
    }

    const data = new Date();  // Momento atual
    const horas = this.data.getHours()
    const minutos = this.data.getMinutes()
    const segundos = this.data.getSeconds()

    const hhmmss = [horas, minutos, segundos].join(':')
    console.log(hhmmss)

    public getHours() : number {
        return this.horas
    }

    public getMinutos() : number {
        return this.minutos
    }

    public getSeconds() : number {
        return this.segundos
    }

    public getHoraFormatada() : string {
        const horaFormatada = this.padZero(this.horas) + ":" + this.padZero(this.minutos) + ":" + this.padZero(this.segundos)
        return horaFormatada

    private padZero(valor : number) : string {
        return valor < 10 ? "0" + valor : valor.toString()
        }
    }
}

// Exemplo de uso de minha classe Hora
const minhaHora = new Hora(8, 30, 15)
console.log(`Hora será: ${minhaHora.getHora()}`)
console.log(`Minutos serão: ${minhaHora.getMinutos()}`)
console.log(`Segundos serão: ${minhaHora.getSeconds()}`)

console.log(`E com isso, a minha hora formatada será: ${minhaHora.getHoraFormatada()}`)


