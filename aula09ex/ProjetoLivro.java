package aula09ex;

public class ProjetoLivro {

	public static void main(String[] args) {
		Pessoa[] p = new Pessoa[2];
		Livro[] l = new Livro[3];

		p[0] = new Pessoa("Katier",21,"M");
		p[1] = new Pessoa("Geysa",24,"F");
		p[2] = new Pessoa("mario",19,"M");
		
		l[0] = new Livro("biblia","deus",2000,p[0]);
		l[1] = new Livro("Cronicas","Abreu",50,p[2]);
		
		System.out.println(l[0].detalhes());
		
	}

}
