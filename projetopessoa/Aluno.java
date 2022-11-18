package projetopessoa;
public class Aluno extends Pessoa {
    private int mtr;
    private String curso;
    private int cpf;
    private int anoIngresso;

    public void cancelarMatricula() {
        System.out.println("Matricula será cancelada.")

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
