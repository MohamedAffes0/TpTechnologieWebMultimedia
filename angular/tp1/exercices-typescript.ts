// ----------------------Partie 4----------------------

// variables avec typage
let nom: string = "Med Affes";
let age: number = 20;
let estEtudiant: boolean = true;
let note: number | null = null;
let hobbies: string[] = ["Sport", "Musique", "Coding"];

console.log(`Nom: ${nom}, Age: ${age}, Est Etudiant: ${estEtudiant}`);
console.log(`Hobbies: ${hobbies}`);
console.log(`Note: ${note}`);

// fonction avec typage
function somme(a: number, b: number): number {
    return a + b;
}

console.log(`Somme de 5 et 10: ${somme(5, 10)}`);

// interface etudiant
interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

// implémentation de l'interface
class EtudiantImpl implements Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;

    constructor(id: number, nom: string, prenom: string, age: number) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    afficherInfo(): void {
        console.log(`Etudiant [ID: ${this.id}, Nom: ${this.nom}, Prenom: ${this.prenom}, Age: ${this.age}]`);
    }
}

let etudiant = new EtudiantImpl(1, "Doe", "John", 22);
etudiant.afficherInfo();

// ----------------------Partie 5----------------------

// fonction générique
function creerTableauGenerique<T>(valeur1: T, valeur2: T): T[] {
    return [valeur1, valeur2];
}

let tableauString = creerTableauGenerique<string>("Bonjour", "Monde");
let tableauNumber = creerTableauGenerique<number>(1, 2);

console.log(`Tableau de Strings: ${tableauString}`);
console.log(`Tableau de Numbers: ${tableauNumber}`);

// fonction avec paramètre optionnel et union type
function afficherValeur(valeur: number | string, prefixe?: string): void {
    if (prefixe != undefined) {
        console.log(`${prefixe} ${valeur}`);
    } else {
        console.log(valeur);
    }
}

afficherValeur(42);
afficherValeur("Hello TypeScript", "Message:");

// Enumération avec valeurs par défaut
enum Niveau {
    Debutant = "Debutant",
    Intermediaire = "Intermediaire",
    Avance = "Avance",
}

console.log(`Niveau Debutant: ${Niveau.Debutant}`);
