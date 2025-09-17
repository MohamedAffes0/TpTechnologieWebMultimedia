class Etudiant {
    /// <summary>
    /// Représente un étudiant avec son nom et sa note.
    /// </summary>
    constructor(nom, note) {
        this.nom = nom;
        if (note < 0 || note > 20) {
            this.note = 0;
        } else {
            this.note = note;
        }
    }

    getMention() {
        if (this.note >= 16) {
            return "Très bien";
        } else if (this.note >= 14) {
            return "Bien";
        } else if (this.note >= 10) {
            return "Passable";
        } else {
            return "Echec";
        }
    }
}

const etudiant1 = new Etudiant("MedAffes", 18);
console.log("etudiant1: " + etudiant1.getMention()); // Très bien

const etudiant2 = new Etudiant("John Doe", 12);
console.log("etudiant2: " + etudiant2.getMention()); // Passable

const etudiant3 = new Etudiant("Jane Doe", 25);
console.log("etudiant3: " + etudiant3.getMention()); // Echec (note invalide, donc 0)