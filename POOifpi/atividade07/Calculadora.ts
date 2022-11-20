class Calculadora {
    private operando1: number
    private operando2: number

    constructor(operando_1: number, operando_2: number) {
        this.operando1 = operando_1
        this.operando2 = operando_2
    }

    soma(): number {
        return this.operando1 + this.operando2
    }

    getOperando1(): number {
        return this.operando1
    }
    
    getOperando2(): number {
        return this.operando2
    }
}

let calculadora: Calculadora = new Calculadora(100, 200)
console.log(`Soma = ${calculadora.soma()}`)

class CalculadoraCientifica extends Calculadora {
    exponenciar(): number {
        return this.getOperando1() ** this.getOperando2()
    }
}

let calcCientifica: CalculadoraCientifica = new CalculadoraCientifica(30, 2)
console.log(`Exponenciar = ${calcCientifica.exponenciar()}`)

