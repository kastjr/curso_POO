function saudar(nome, sobrenome) {
    if (sobrenome) {
        return nome + " " + sobrenome;
    }
    return "Sr. " + nome;
}
console.log(saudar("Kastier"));
console.log(saudar("Mario", "gultierres"));