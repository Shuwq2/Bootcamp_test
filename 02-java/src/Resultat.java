/* FOURNI — NE PAS MODIFIER
   Une ligne de classement (pilote ou écurie). */
public class Resultat {
    public final String nom;
    public final String ecurie;   // vide pour une écurie
    public int points;
    public int victoires;
    public int deuxiemes;

    public Resultat(String nom, String ecurie) {
        this.nom = nom;
        this.ecurie = ecurie;
    }

    public Resultat(String pilote, String ecurie2, int points2, int i, int j) {
        //TODO Auto-generated constructor stub
    }

    @Override
    public String toString() {
        return nom + " (" + points + " pts, " + victoires + "V)";
    }
}
