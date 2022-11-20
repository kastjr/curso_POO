class Hora {
    private horas: number // horas
    private minutos: number // minutos
    private segundos: number // segundos

    constructor(hora: number, minuto: number, segundo: number) {
        this.horas = hora
        this.minutos = minuto
        this.segundos = segundo
    }

    lerHora(): number {
        return this.horas
    }

    lerMinuto(): number {
        return this.minutos
    }

    lerSegundo(): number {
        return this.segundos
    }

    lerHorario(): string {
        return `${this.horas}:${this.minutos}:${this.segundos}`
    }
}

let hora: Hora = new Hora(13, 0, 38)

console.log(`Hora: ${hora.lerHora()}`)
console.log(`Minuto: ${hora.lerMinuto()}`)
console.log(`Segundo: ${hora.lerSegundo()}`)
console.log(`Horário: ${hora.lerHorario()}`)