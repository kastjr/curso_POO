function saudacao(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return nome + " " + sobrenome
    }

    return "Sr. " + nome
}

console.log(saudacao("Kastier"))
console.log(saudacao("kastier","junior" ))