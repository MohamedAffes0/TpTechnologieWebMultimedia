const notes = [12, 5, 17, 9, 20];

const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
console.log("Moyenne: " + moyenne);

const notesTriees = [...notes].sort((a, b) => a - b);
console.log("Notes triées: " + notesTriees);

const notesSup10 = notes.filter(n => n > 10);
console.log("Notes supérieures à 10: " + notesSup10);