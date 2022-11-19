package animal;
public class peixe extends animal {
    private String corEscama;

    @Override 
    public void locomover() {
        return ("nadando")
    }

    @Override
    public void alimentar() {
        return ("comendo substancias")
    }

    @Override
    public void emitirSom() {
        return ('nao faz som ')
    }

    public void soltarBolha() {
        return ("soltou uma bolha")
    }

    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }
}