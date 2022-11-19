function isPrimo(numero: number): boolean {
    for (let i = numero - 1; i > 1; i--) {
        if (numero % i === 0) {
            return false
        }
    }

    return true
}

console.log(isPrimo(2))
console.log(isPrimo(3))
console.log(isPrimo(10))
console.log(isPrimo(8))
console.log(isPrimo(13))