class Produto {
    private id: string
    private descricao: string
    private quantidade: number
    private valorUnitario: number

    constructor(id: string, descricao: string, quantidade: number, valorUnitario: number) {
        this.id = id
        this.descricao = descricao
        this.quantidade = quantidade
        this.valorUnitario = valorUnitario
    }

    repor(quantidade: number): void {
        this.quantidade += quantidade
    }

    darBaixa(quantidade: number): void {
        this.quantidade -= quantidade
    }
}

class ProdutoPerecivel extends Produto {
    private dataValidade;

    // "YYYY-MM-DD"
    super(dataValidade: string) {
        this.dataValidade = new Date(dataValidade)
    }

    
}

//let produto_perecivel: ProdutoPerecivel = new ProdutoPerecivel('2022-12-13')
let data_1: Date = new Date('2022-12-11')
let data_2: Date = new Date('2022-12-13')

//console.log(data_1.toSource())
//console.log(data_2.valueOf())