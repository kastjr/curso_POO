abstract class time {
    private elenco = new Array [];
    private nome : string;
    private saldo : number;
    private qtdJogadores : number;

    constructor(nome:string,saldo:number,qtdJogadores:number) {
        this.nome = nome;
        this.saldo= saldo;
        this.qtdJogadores = qtdJogadores;
    }

    public contratar(Id:number): void {
        if(temEspaco () & temOrcamento ()) {
         this.elenco.push(id)
        }
    }

    public temEspaco (): boolean {
        if(this.elenco<11) {
          return true 
         }
           return false
    }

    
}
