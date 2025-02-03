function addPost() {
    // Obtener los valores ingresados por el usuario
    let title = document.getElementById("post-title").value;
    let content = document.getElementById("post-content").value;
    
    if (title.trim() === "" || content.trim() === "") {
        alert("Por favor, ingresa un título y contenido para el post.");
        return;
    }
    
    // Crear elementos de post
    let postCard = document.createElement("div");
    postCard.className = "card mb-4";
    
    let postBody = document.createElement("div");
    postBody.className = "card-body";
    
    let postTitle = document.createElement("h2");
    postTitle.className = "card-title";
    postTitle.textContent = title;
    
    let postText = document.createElement("p");
    postText.className = "card-text";
    postText.textContent = content;
    
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger mt-2";
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {
        postCard.remove();
    };
    
    // Agregar elementos al post
    postBody.appendChild(postTitle);
    postBody.appendChild(postText);
    postBody.appendChild(deleteButton);
    postCard.appendChild(postBody);
    
    // Agregar post al contenedor de blog posts
    document.getElementById("blog-posts").prepend(postCard);
    
    // Limpiar los campos del formulario
    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
}
