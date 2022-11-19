package animal;
public abstract animal {
    private int peso;
    private int idade;
    private int membros;

    public void abstract locomover()
    public void abstract emitirSom()
    public void abstract alimentar()

    public int getPeso() {
        return peso;
    }

    public void setPeso(int peso) {
        this.peso = peso;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getMembros() {
        return membros;
    }

    public void setMembros(int membros) {
        this.membros = membros;
    }
}