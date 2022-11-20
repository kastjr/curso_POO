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
    
    subtrai(): number {
        return this.operando1 - this.operando2
    }
}

let calc: Calculadora = new Calculadora(100, 200);

console.log(`Soma: ${calc.soma()}`)
console.log(`Subtração: ${calc.subtrai()}`)

// console.log(`operando1: ${calc._operando1}`) erro (atributo privado)
// console.log(`operando2: ${calc._operando2}`) erro (atributo privado)
// Ambos atributos sao privados por isso no codigo principal , em forma de encapsular ou proteger o codigo, não é possivel acessar esses atributos.
