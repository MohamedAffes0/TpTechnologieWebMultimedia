const postsContainer = document.getElementById("posts");

/**
 * Fonction pour récupérer et afficher les posts depuis l'API JSONPlaceholder
 * Utilisation de async/await pour gérer les promesses
 * Affiche les 5 premiers posts dans le conteneur HTML
 * Gère les erreurs de manière appropriée
 * @returns {Promise<void>}
 */
async function fetchPosts() {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts"); // On attend la réponse de l'API
        const data = await result.json(); // On parse la réponse en JSON
        data.slice(0, 5).forEach(post => {
            const div = document.createElement("div");
            div.innerHTML = `<h3>${post.id}: ${post.title}</h3><p>${post.body}</p>`;
            div.className = "post";
            postsContainer.appendChild(div);
        });
    } catch (error){
        postsContainer.innerHTML = `<p>Erreur lors de la récupération des posts: ${error.message}</p>`;
    }
}

fetchPosts();