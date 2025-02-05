function addPost() {
    let title = document.getElementById("post-title").value.trim();
    let content = document.getElementById("post-content").value.trim();

    if (title === "" || content === "") {
        alert("Por favor, ingresa un título y contenido para el post.");
        return;
    }

    let blogContainer = document.getElementById("blog-posts");
    if (!blogContainer) {
        console.error("Error: No se encontró el contenedor de posts.");
        return;
    }

    let postCard = document.createElement("div");
    postCard.className = "card mb-4 post-card";

    let postImage = document.createElement("img");
    postImage.className = "card-img-top post-image";
    postImage.src = "./img/default.jpg"; // Imagen por defecto
    postImage.onerror = function() { // Si la imagen no existe, usa otra
        postImage.src = "https://via.placeholder.com/400x200";
    };

    let postBody = document.createElement("div");
    postBody.className = "card-body";

    let postDate = document.createElement("div");
    postDate.className = "small text-muted";
    postDate.textContent = new Date().toLocaleDateString("es-ES");

    let postTitle = document.createElement("h2");
    postTitle.className = "card-title";
    postTitle.textContent = title;

    let postText = document.createElement("p");
    postText.className = "card-text";
    postText.textContent = content;

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger mt-2";
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = () => postCard.remove();

    // Añadir elementos al post
    postBody.append(postDate, postTitle, postText, deleteButton);
    postCard.append(postImage, postBody);
    blogContainer.prepend(postCard);

    // Limpiar formulario
    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
}
