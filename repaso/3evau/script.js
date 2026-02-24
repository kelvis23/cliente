/*
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  // Filtramos posts de userId 1
  const userPosts = posts.filter(post => post.userId === 1);
  console.log(userPosts);
}

getPosts();
*/
async function getPostsConErrores() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/postss'); // URL incorrecta
    if (!response.ok) throw new Error('Error en la petición');
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.log("No se pudieron obtener los datos. Intenta de nuevo más tarde.");
  }
}

getPostsConErrores();

