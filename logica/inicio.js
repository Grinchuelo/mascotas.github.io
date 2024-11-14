function obtenerMascota() {
    var mascotaData = localStorage.getItem("mascota");
    return mascotaData ? JSON.parse(mascotaData) : null;
}
function mostrarDatos() {
    var mascota = obtenerMascota();
    if (mascota) {
        console.log("Datos de la mascota:", mascota);
        document.getElementById("nombre").innerText = "".concat(mascota.nombre);
        if (mascota.especie == "Perro") {
            document.getElementById("img_mascota").setAttribute("src", "./img/perro.png");
        }
        else if (mascota.especie == "Gato") {
            document.getElementById("img_mascota").setAttribute("src", "./img/gato.png");
        }
        else if (mascota.especie == "Pez") {
            document.getElementById("img_mascota").setAttribute("src", "./img/pez.png");
        }
        else if (mascota.especie == "Hamster") {
            document.getElementById("img_mascota").setAttribute("src", "./img/hamster.png");
        }
        else if (mascota.especie == "Conejo") {
            document.getElementById("img_mascota").setAttribute("src", "./img/conejo.png");
        }
        else if (mascota.especie == "Pajaro") {
            document.getElementById("img_mascota").setAttribute("src", "./img/pajaro.png");
        }
        else if (mascota.especie == "Tortuga") {
            document.getElementById("img_mascota").setAttribute("src", "./img/tortuga.png");
        }
        else if (mascota.especie == "Serpiente") {
            document.getElementById("img_mascota").setAttribute("src", "./img/serpiente.png");
        }
        else if (mascota.especie == "Lagarto") {
            document.getElementById("img_mascota").setAttribute("src", "./img/lagarto.png");
        }
        /* document.getElementById("infoMascota")!.innerHTML = `
            Especie: ${mascota.especie} <br>
            Nombre: ${mascota.nombre} <br>
            Edad: ${mascota.edad} años
        `; */
    }
    else {
        console.log("No hay datos de mascota guardados.");
    }
}
document.addEventListener('DOMContentLoaded', mostrarDatos);
