var _a;
// Función para manejar el envío del formulario
function registrarMascota(event) {
    event.preventDefault(); // Previene que la página se recargue
    // Obtener los valores del formulario
    var especie = document.getElementById("especie").value;
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    // Crear el objeto mascota basado en la interfaz
    var mascota = {
        especie: especie,
        nombre: nombre,
        edad: edad,
    };
    localStorage.setItem("mascota", JSON.stringify(mascota));
    window.location.href = "inicio.html";
    // Guardar en localStorage o una variable temporal (en este caso mostramos en consola)
    console.log(mascota);
}
// Asignar la función al evento 'submit' del formulario
(_a = document.getElementById("formularioMascota")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", registrarMascota);
