package animal;
public class ave extends animal {
    private String corPena;

    @Override 
    public void locomover() {
        return ("voando")
    }

    @Override
    public void alimentar() {
        return ("comendo")
    }

    @Override
    public void emitirSom() {
        return ('canto')
    }

    public void fazerNinho() {
        return ("fez um ninho")
    }

    public String getCorPena() {
        return corPena;
    }

    public void setCorPena(String corPena) {
        this.corPena = corPena;
    }
}