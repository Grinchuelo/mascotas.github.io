interface Mascota {
    especie: string;
    nombre: string;
    edad: number;
}

function obtenerMascota(): Mascota | null {
    const mascotaData = localStorage.getItem("mascota");
    return mascotaData ? JSON.parse(mascotaData) : null;
}

function mostrarDatos(): void {
    const mascota = obtenerMascota();
    if (mascota) {
        console.log("Datos de la mascota:", mascota);
        document.getElementById("nombre")!.innerText = `${mascota.nombre}`;
        if (mascota.especie == "Perro") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/perro.png");
        } else if (mascota.especie == "Gato") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/gato.png");
        } else if (mascota.especie == "Pez") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/pez.png")
        } else if (mascota.especie == "Hamster") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/hamster.png")
        } else if (mascota.especie == "Conejo") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/conejo.png")
        } else if (mascota.especie == "Pajaro") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/pajaro.png")
        } else if (mascota.especie == "Tortuga") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/tortuga.png")
        } else if (mascota.especie == "Serpiente") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/serpiente.png")
        } else if (mascota.especie == "Lagarto") {
            document.getElementById("img_mascota")!.setAttribute("src", "./img/lagarto.png")
        } 
        /* document.getElementById("infoMascota")!.innerHTML = `
            Especie: ${mascota.especie} <br>
            Nombre: ${mascota.nombre} <br>
            Edad: ${mascota.edad} años
        `; */
    } else {
        console.log("No hay datos de mascota guardados.");
    }
}

document.getElementById("abrirModal")?.addEventListener('click', () => {
    let modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "flex";
        let text = (document.getElementById("taskInput") as HTMLInputElement);
        if (text) {
            text.value = "";
        }
    }
}) 

document.getElementById("cerrarModal")?.addEventListener('click', () => {
    let modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
})

document.getElementById("agregarListElement")?.addEventListener('click', () => {
    let text = (document.getElementById("taskInput") as HTMLInputElement).value;
    if (text) {
        let todoList_main = document.getElementById("todoList_main");
        if (todoList_main) {
            todoList_main.insertAdjacentHTML("beforeend", 
                `<div class="listElement">
                    <input type="checkbox" class="checkbox">
                    <p>${text}</p>
                    <img src="img/eliminarTodoListIcono.png" class="eliminarTarea">
                </div>`);
            
            let ultimaTarea = todoList_main.lastElementChild;
            let btn_eliminar = ultimaTarea?.querySelector('.eliminarTarea');
            btn_eliminar?.addEventListener('click', () => {
                ultimaTarea?.remove();
            })

            let modal = document.getElementById("modal");
            if (modal) {
                modal.style.display = "none";
            }
        }
    }
}) 

document.querySelectorAll(".eliminarTarea").forEach(eliminar => {
    eliminar.addEventListener('click', () => {
        eliminar?.parentElement?.remove();
    })
});

document.addEventListener('DOMContentLoaded', mostrarDatos);

