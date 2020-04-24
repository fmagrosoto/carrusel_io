// NO usé nada de jQuery

let cItems = document.querySelectorAll('.el-carrusel > .el-carrusel-item'); // Los items de carrusel
let activo = 0; // Item activo por default
let tempo; // Variable para el temporizador
let segundos = 6000; // Seis segundos
let botones = document.querySelectorAll('main > nav a'); // Botones de navegación

/**
 * FUNCIÓN PARA ACCIONAR LA ANIMACIÓN DE TRANSICIÓN ESTRE ESTADOS DE CADA ITEM
 * Se ejecuta cada tiempo estipulado en la variable segundos.
 * Esta función NO usa nada de jQuery.
 * @see /style.css
 * @author Fernando Magrosoto V <fmagrosoto@gmail.com>
 * @copyright FMV 24 de abril, 2020
 */
const transisionadorizador = () => {
    clearTimeout(tempo);
    document.querySelector('.el-carrusel-item.activo').classList.remove('activo');
    activo++;
    if(activo === cItems.length) {
        activo = 0;
    }
    cItems[activo].classList.add('activo');

    // Activos para los botones
    document.querySelector('main > nav a.activo').classList.remove('activo');
    botones[activo].classList.add('activo');

    // llamada recursiva cada seis segundos
    tempo = setTimeout(transisionadorizador, segundos);
}

window.onload = () => {
    // Todo lo que está aquí se ejecuta una vez que esté cargada toda la página.

    if (cItems) {
        // Ponemos activo el primer item
        cItems[activo].classList.add('activo');

        // Ponemos activo el primer botón de navegación
        botones[activo].classList.add('activo');

        // Llamamos a la función
        tempo = setTimeout(transisionadorizador, segundos);
    }

    if (botones) {
        botones.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                let target = parseInt(element.dataset.target) - 1;
                if (target < 0) {
                    target = cItems.length - 1;
                }
                activo = target;
                transisionadorizador();
            }, false);
        });
    }
}