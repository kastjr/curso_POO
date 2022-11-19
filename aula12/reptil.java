package animal;
public class reptil extends animal {
    private String corEscama;

    @Override 
    public void locomover() {
        return ("rastejando")
    }

    @Override
    public void alimentar() {
        return ("comendo vegetais")
    }

    @Override
    public void emitirSom() {
        return ('som de reptil')
    }

    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }
}