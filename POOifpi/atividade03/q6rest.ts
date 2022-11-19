const exibir = (...elements: string[]): void => {
    for (let i: number = 0; i < elements.length; i++) {
        console.log(elements[i])
    }
    
    console.log() // quebra de linha
}

exibir("a", "b")
exibir("a", "b", "c")
exibir("a", "b", "c", "d")