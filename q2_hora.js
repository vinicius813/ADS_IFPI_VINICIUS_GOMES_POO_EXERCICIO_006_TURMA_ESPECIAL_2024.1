var Hora = /** @class */ (function () {
    function Hora(horas, minutos, segundos) {
        this.data = new Date(); // Momento atual
        this.horas = this.data.getHours();
        this.minutos = this.data.getMinutes();
        this.segundos = this.data.getSeconds();
        this.hhmmss = [horas, minutos, segundos].join(':');
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Hora.prototype.getHora = function () {
        return this.horas;
    };
    Hora.prototype.getMinutos = function () {
        return this.minutos;
    };
    Hora.prototype.getSeconds = function () {
        return this.segundos;
    };
    Hora.prototype.getHoraFormatada = function () {
        var horaFormatada = this.padZero(this.horas) + ":" + this.padZero(this.minutos) + ":" + this.padZero(this.segundos);
        return horaFormatada;
    };
    Hora.prototype.padZero = function (valor) {
        return valor < 10 ? "0" + valor : valor.toString();
    };
    return Hora;
}());
// Exemplo de uso de minha classe Hora
var minhaHora = new Hora(8, 30, 15);
console.log("Hora ser\u00E1: ".concat(minhaHora.getHora()));
console.log("Minutos ser\u00E3o: ".concat(minhaHora.getMinutos()));
console.log("Segundos ser\u00E3o: ".concat(minhaHora.getSeconds()));
console.log("E com isso, a minha hora formatada ser\u00E1: ".concat(minhaHora.getHoraFormatada()));
