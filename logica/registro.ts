interface Mascota {
    especie: string;
    nombre: string;
    edad: number;
}

// Función para manejar el envío del formulario
function registrarMascota(event: Event): void {
    event.preventDefault(); 

    // Obtener los valores del formulario
    const especie = (document.getElementById("especie") as HTMLSelectElement).value;
    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const edad = parseInt((document.getElementById("edad") as HTMLInputElement).value);

    // Crear el objeto mascota basado en la interfaz
    const mascota: Mascota = {
        especie,
        nombre,
        edad,
    };

    localStorage.setItem("mascota", JSON.stringify(mascota));

    window.location.href = "inicio.html";
}

// Asignar la función al evento 'submit' del formulario
document.getElementById("formularioMascota")?.addEventListener("submit", registrarMascota);