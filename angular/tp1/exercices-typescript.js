// ----------------------Partie 4----------------------
var nom = "Med Affes";
var age = 20;
var estEtudiant = true;
var note = null;
var hobbies = ["Sport", "Musique", "Coding"];
console.log("Nom: ".concat(nom, ", Age: ").concat(age, ", Est Etudiant: ").concat(estEtudiant));
console.log("Hobbies: ".concat(hobbies));
console.log("Note: ".concat(note));
function somme(a, b) {
    return a + b;
}
console.log("Somme de 5 et 10: ".concat(somme(5, 10)));
var EtudiantImpl = /** @class */ (function () {
    function EtudiantImpl(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    EtudiantImpl.prototype.afficherInfo = function () {
        console.log("Etudiant [ID: ".concat(this.id, ", Nom: ").concat(this.nom, ", Prenom: ").concat(this.prenom, ", Age: ").concat(this.age, "]"));
    };
    return EtudiantImpl;
}());
var etudiant = new EtudiantImpl(1, "Doe", "John", 22);
etudiant.afficherInfo();
// ----------------------Partie 5----------------------
function creerTableauGenerique(valeur1, valeur2) {
    return [valeur1, valeur2];
}
var tableauString = creerTableauGenerique("Bonjour", "Monde");
var tableauNumber = creerTableauGenerique(1, 2);
console.log("Tableau de Strings: ".concat(tableauString));
console.log("Tableau de Numbers: ".concat(tableauNumber));
function afficherValeur(valeur, prefixe) {
    if (prefixe != undefined) {
        console.log("".concat(prefixe, " ").concat(valeur));
    }
    else {
        console.log(valeur);
    }
}
afficherValeur(42);
afficherValeur("Hello TypeScript", "Message:");
var Niveau;
(function (Niveau) {
    Niveau["Debutant"] = "Debutant";
    Niveau["Intermediaire"] = "Intermediaire";
    Niveau["Avance"] = "Avance";
})(Niveau || (Niveau = {}));
console.log("Niveau Debutant: ".concat(Niveau.Debutant));
