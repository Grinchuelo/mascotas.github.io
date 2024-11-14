var _a, _b, _c;
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
(_a = document.getElementById("abrirModal")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "flex";
        var text = document.getElementById("taskInput");
        if (text) {
            text.value = "";
        }
    }
});
(_b = document.getElementById("cerrarModal")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
});
(_c = document.getElementById("agregarListElement")) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var text = document.getElementById("taskInput").value;
    if (text) {
        var todoList_main = document.getElementById("todoList_main");
        if (todoList_main) {
            todoList_main.insertAdjacentHTML("beforeend", "<div class=\"listElement\">\n                    <input type=\"checkbox\" class=\"checkbox\">\n                    <p>".concat(text, "</p>\n                    <img src=\"img/eliminarTodoListIcono.png\" class=\"eliminarTarea\">\n                </div>"));
            var ultimaTarea_1 = todoList_main.lastElementChild;
            var btn_eliminar = ultimaTarea_1 === null || ultimaTarea_1 === void 0 ? void 0 : ultimaTarea_1.querySelector('.eliminarTarea');
            btn_eliminar === null || btn_eliminar === void 0 ? void 0 : btn_eliminar.addEventListener('click', function () {
                ultimaTarea_1 === null || ultimaTarea_1 === void 0 ? void 0 : ultimaTarea_1.remove();
            });
            var modal = document.getElementById("modal");
            if (modal) {
                modal.style.display = "none";
            }
        }
    }
});
document.querySelectorAll(".eliminarTarea").forEach(function (eliminar) {
    eliminar.addEventListener('click', function () {
        var _a;
        (_a = eliminar === null || eliminar === void 0 ? void 0 : eliminar.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    });
});
document.addEventListener('DOMContentLoaded', mostrarDatos);
