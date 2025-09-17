const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fetchData() {
    console.log("Debut du fetch...");
    await wait(2000); // Simule un délai de 2 secondes
    console.log("Données récupérées !");
}
fetchData();

// ---------------ou----------

console.log("Debut du fetch...");
wait(2000).then(() => {
    console.log("Données récupérées avec then !");
})