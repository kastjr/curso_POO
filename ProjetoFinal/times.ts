abstract class time {
    
    private nome : string;
    private saldo : number;
    private qtdJogadores : number;

    constructor(nome:string,saldo:number,qtdJogadores:number) {
        this.nome = nome;
        this.saldo= saldo;
        this.qtdJogadores = qtdJogadores;
    }
}