package projetopessoa;
public class Funcionario extends Pessoa {
    private String  setor;
    private boolean trabalhando;
    private int salario;

    public void mudarTrabalho() {
        this.trabalhando = !this.trabalhando;
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    public int getTrabalhando() {
        return trabalhando;
    }

    public void setTrabalhando(boolean trabalhando) {
        this.trabalhando = trabalhando;
    }


}
