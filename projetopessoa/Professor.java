package projetopessoa;
public class Professor extends Pessoa {
    private String especialidade;
    private float salario;

    public void receberAumento(float aum) {
        this.salario = salario + aum;
    }

    public String getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public int getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;


}

}