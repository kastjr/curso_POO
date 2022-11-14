package projetopessoa;
public class ProjetoPessoa {
    public static void main(String[] args) {
        
        Pessoa p1 = new Pessoa();
        Aluno p2 = new Aluno();
        Professor p3 = new Professor();
        Funcionario p4 = new Funcionario();

        p1.setNome("pedro");
        p2.setNome("maria");
        p3.setNome("claudio");
        p4.setNome("fabiana");

        p2.setCurso("informatica");
        p3.setSalario(2500.00)
        p4.setSetor("estoque")

    }
}
