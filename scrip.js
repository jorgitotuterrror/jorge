function cambiarEstilo() {
    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = "#ffe4e1";

    // Cambiar el color y tamaño del texto
    let mensaje = document.getElementById("mensaje");
    mensaje.style.color = "darkred";
    mensaje.style.fontSize = "32px";
    mensaje.textContent = "¡El estilo ha cambiado con JavaScript!";
  }