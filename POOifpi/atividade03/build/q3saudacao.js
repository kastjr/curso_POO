"use strict";
function saudacao(nome, sobrenome) {
    if (sobrenome) {
        return nome + " " + sobrenome;
    }
    return "Sr. " + nome;
}
console.log(saudacao("Kastier"));
console.log(saudacao("kastier", "junior"));
