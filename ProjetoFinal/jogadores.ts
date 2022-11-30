abstract class Pessoa {
    private nome : string;
    private idade : number;


    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string{
        return this.nome;
    }

    public getIdade(): number{
        return this.idade;
    }


}

class Jogador extends Pessoa {
    private posicao : string;
    private overall : number;
    private valor : number;

    constructor(nome:string, idade:number,posicao:string , overall:number , valor:number) {
        super(nome,idade)
        this.posicao = posicao;
        this.overall = overall;
        this.valor = valor;

    }

    public aumentarOver():boolean {
        if(this.overall<100){
            this.overall++
            return true
        }
        return false
    }

    public diminuirOver():boolean {
        if(this.overall>10){
            this.overall--
            return true
        }
        return false
    }

    public calcularValor():void {
        if(this.diminuirOver()){
            if(this.overall<50){
                this.valor = this.valor/5
            }else if(this.overall<70){
                this.valor = this.valor/2
            }else if(this.overall<90){
                this.valor = this.valor/2
            }
        }else if(this.aumentarOver()){
            if(this.overall>65){
                this.valor = this.valor*5
            }else if(this.overall>70){
                this.valor = this.valor*2
            }else if(this.overall>80){
                this.valor = this.valor*2
            }else if(this.overall>90){
                this.valor = this.valor*2
            }
        }
    }

}



