const result = await fetch("https://jsonplaceholder.typicode.com/posts"); // On attend la réponse de l'API
const data = await result.json(); // On parse la réponse en JSON
data.slice(0, 5).forEach(post => {
    console.log(`Post ${post.id}: ${post.title}`);
});