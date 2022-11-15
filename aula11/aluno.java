package aula11;
public class Aluno extends Pessoa {
    private int mtr;
    private String curso;

    public void pagarMensalidade() {
        System.out.println("Pagando mensalidade")

    }

    public int getMtr() {
        return mtr;
    }

    public void setMtr(int mtr) {
        this.mtr = mtr;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
}