abstract class Pessoa {
    private id : number;
    private nome : string;
    private idade : number;
    private aVenda : boolean;


    constructor(id:number,nome:string, idade:number, aVenda : boolean){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.aVenda = false;
    }

    public getNome(): string{
        return this.nome;
    }

    public getIdade(): number{
        return this.idade;
    }

    public getId(): number{
        return this.id;
    }



}

class Jogador extends Pessoa {
    private posicao : string;
    private overall : number;
    private valor : number;
    

    constructor(id: number , nome:string, idade:number,posicao:string , overall:number , valor:number , aVenda : boolean) {
        super(id,nome,idade,aVenda)
        this.posicao = posicao;
        this.overall = overall;
        this.valor = valor;

    }

    public aumentarOver():void {
        if(this.overall<100){
            this.overall++
            
        }
        
    }

    public diminuirOver():void {
        if(this.overall>10){
            this.overall--
            
        }
        
    }

    
}

class Tecnico extends Pessoa {
    private overall : number;
    private valor : number;

    constructor(id: number , nome:string, idade:number , overall:number , valor:number , aVenda : boolean) {
        super(id,nome,idade,aVenda)
        this.overall = overall;
        this.valor = valor;

    }
}

class Comissao extends Pessoa {
    private valor : number;
    private funcao :string;

    constructor(id: number , nome:string, idade:number , valor:number , funcao : string , aVenda : boolean) {
        super(id,nome,idade,aVenda)
        this.funcao = funcao;
        this.valor = valor;

    }
}



