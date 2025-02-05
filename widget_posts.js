function addPost() {
    let title = document.getElementById("post-title").value.trim();
    let content = document.getElementById("post-content").value.trim();
    let imageUrl = document.getElementById("post-image-url").value.trim();
    let postLink = document.getElementById("post-link").value.trim();

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
    postImage.src = imageUrl || "./img/ct.png"; // Usa la imagen proporcionada o una por defecto
    postImage.onerror = function() { // Si la imagen no carga, usa una imagen de respaldo
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

    let readMoreBtn = document.createElement("a");
    readMoreBtn.className = "btn btn-primary mt-2";
    readMoreBtn.textContent = "Read more →";
    readMoreBtn.href = postLink || "#"; // Si no hay enlace, mantiene un enlace vacío
    readMoreBtn.target = "_blank"; // Abre el enlace en una nueva pestaña

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger mt-2 ms-2";
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = () => postCard.remove();

    // Agregar elementos al post
    postBody.append(postDate, postTitle, postText, readMoreBtn, deleteButton);
    postCard.append(postImage, postBody);
    blogContainer.prepend(postCard);

    // Limpiar el formulario
    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
    document.getElementById("post-image-url").value = "";
    document.getElementById("post-link").value = "";
}


function searchPost() {
    let searchTerm = document.getElementById("search-input").value.trim().toLowerCase();

    if (searchTerm === "") {
        alert("Por favor, ingresa un término de búsqueda.");
        return;
    }

    let posts = document.querySelectorAll(".post-card");
    let found = false;

    posts.forEach(post => {
        let titleElement = post.querySelector(".card-title");
        if (titleElement) {
            let titleText = titleElement.textContent.trim().toLowerCase();

            if (titleText.includes(searchTerm)) {
                post.scrollIntoView({ behavior: "smooth", block: "start" });
                titleElement.style.backgroundColor = "yellow"; // Resaltar el título encontrado
                setTimeout(() => {
                    titleElement.style.backgroundColor = ""; // Quitar resaltado después de 2 segundos
                }, 2000);
                found = true;
                return;
            }
        }
    });

    if (!found) {
        alert("No se encontraron posts con ese título.");
    }
}
