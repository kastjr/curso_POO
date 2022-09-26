//classe 

package aula06;

public class ControleRemoto implements Controlador {
	
	//Atributos 
	private int volume;
	private boolean ligado;
	private boolean tocando;
	
	//metodos especiais
	public ControleRemoto() {
		this.volume= 50;
		this.ligado = false;
		this.tocando = false;
	}
	
	private int getVolume() {
		return volume;
	}
	private void setVolume(int volume) {
		this.volume = volume;
	}
	private boolean getLigado() {
		return ligado;
	}
	private void setLigado(boolean ligado) {
		this.ligado = ligado;
	}
	private boolean getTocando() {
		return tocando;
	}
	private void setTocando(boolean tocando) {
		this.tocando = tocando;
	}
	
	public static void teste() {
		System.out.println("teste");
	}
	
	//metodos abstratos
	
	@Override
	public void ligar() {
			this.setLigado(true);	
	}
	@Override
	public void desligar() {
			this.setLigado(false);
	}
	
	public void abrirMenu() {
		System.out.println("Está ligado?" + this.getLigado());
		System.out.println("Está tocando?" + this.getTocando());
		System.out.println("Volume : " + this.getVolume());
		for (int i = 0; i  <= this.getVolume() - 1 ; i += 10) {  //i = i + 10
			System.out.print(" | " + i);
		}
		
	}
	@Override
	public void fecharMenu() {
		System.out.println("  Fechando Mennu...   ");
	}
	
	@Override
	public void maisVolume() {
		if (this.getLigado()) {
			this.setVolume(this.getVolume() + 10);
		} else {
			System.out.println("Impossivel  aumentar volume !!");
		}
	}
	
	@Override
	public void menosVolume() {
		if (this.getLigado()) {
			this.setVolume(this.getVolume() - 10);
		} else {
			System.out.println("Impossivel diminuir o volume !!");
		}
	}
	
	@Override
	public void ligarMudo() {
		if (this.getLigado() && this.getVolume() > 0) {
			this.setVolume(0);
		} 
	}
	@Override
	public void desligarMudo() {
		if (this.getLigado() && this.getVolume() == 0) {
			this.setVolume(10);
		}
	}
	@Override
	public void play() {
		if (this.getLigado() && !this.getTocando()) {
			this.setTocando(true);
		}
	}
	@Override
	public void pause() {
		if (this.getLigado() && this.getTocando()) {}
		this.setTocando(false);
	}
	
	
	
}
