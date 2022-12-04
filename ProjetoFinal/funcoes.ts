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