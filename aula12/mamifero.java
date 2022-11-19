package animal;
public class mamifero extends animal {
    private String corPelo;

    @Override 
    public void locomover() {
        return ("correndo")
    }

    @Override
    public void alimentar() {
        return ("mamando")
    }

    @Override
    public void emitirSom() {
        return ('som de mamifero')
    }

    public String getCorPelo() {
        return corPelo;
    }

    public void setCorPelo(String corPelo) {
        this.corPelo = corPelo;
    }
}