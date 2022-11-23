export class Pessoa {
	private nome: string

	constructor(nome: string) {
		this.nome = nome
	}

	name() {
		return this.nome
	}
}

export class Conta {
	private numero: string;
	private saldo: number;

    constructor(numero: string, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}
	
	getnumero(): string {
		return this.numero;
        
	}

	getsaldo(): number {
		return this.saldo;
	}

	sacar(valor: number): boolean {
		if (this.saldo - valor >= 0) {
			this.saldo = this.saldo - valor;

			return true
		}

		return false
	}

	depositar(valor: number): void {
		this.saldo += valor;
	}
}

export class Banco {
	private contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        if (this.consultar(conta.numero()) == null) {
		    this.contas.push(conta);
        }
	}

	consultar(numero: string): Conta {
		let contaConsultada!: Conta;

		for (let conta of this.contas) {
			if (conta.numero() == numero) {
				contaConsultada = conta;
				break;
			}
		}

		return contaConsultada;
	}

	sacar(numero: string, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.sacar(valor);
		}
	}

	transferir(numeroOrigem: string, numeroDestino: string, valor: number): boolean {
		const contaOrigem: Conta = this.consultar(numeroOrigem);
		const contaDestino: Conta = this.consultar(numeroDestino);

		if (contaOrigem != null && contaDestino != null && contaOrigem.sacar(valor)) {
			contaDestino.depositar(valor)

			return true
		}

		return false
	}

	private consultarPorIndice(numero: string): number {
		let indice: number = -1

		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero() == numero) {
				indice = i
				break
			}
		}

		return indice
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero());
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	depositar(numero: string, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    quantidadeContas(): number {
        return this.contas.length;
    }

    totalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo();
        }

        return totalSaldo;
    }

    mediaSaldos() {
        return this.totalSaldos() / this.quantidadeContas();
    }
}
