document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form");
    const nombre = document.getElementById("nombre");
    const edad = docu

    form.addEventListener("submit", (event) => {
    // Evita que el formulario se envíe automáticamente
        event.preventDefault();

        if (nombre.value.length === 0) {
            alert("Por favor, introduce tu nombre.");
        } else if (nombre.value.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
        } else {
            alert("Formulario enviado correctamente ✅");
            // Aquí podrías hacer el envío manualmente, por ejemplo:
            // form.submit();
        }
    });
})