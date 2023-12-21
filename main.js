let notas = []; // Ahora notas es un array que almacenara objetos

// Bucle principal
while (true) {
    let opcion = prompt('¿Que quieres hacer? \n 1) Agregar 2) Mostrar Nota 3) Editar 4) Eliminar 0) Salir');

    // Verifico que haya ingresado un número correcto del 1 al 4 
    while (isNaN(opcion) || opcion < 0 || opcion > 4 || opcion == null || opcion == "") {
        opcion = prompt("Por favor, ingresa una Opcion Correcta \n 1) Agregar 2) Mostrar Nota 3) Editar 4) Eliminar 0) Salir");
    }

    //Arranacan las opciones del 1 al 4 con su funcionalidad
    if (opcion == 1) {
        // Agregar nueva nota al array notas
        let nuevaNota = agregarNota();
        notas.push(nuevaNota);
        alert("Nota agregada:\n" + "Titulo: " + nuevaNota.titulo + "\n" + "Nota:" + nuevaNota.contenido);
    } else if (opcion == 2) {
        //Muestro la nota con el indice que quiera el usuario
        mostrarNota();
    } else if (opcion == 3) {
        //Edito la nota que desea el usuario (Por indice)
        let indiceNota = prompt("Ingrese el índice de la nota que desea editar:");
        ultimaNota = editarNota(indiceNota);
        if (ultimaNota) {
            alert("Nota editada:\n" + "Titulo: " + ultimaNota.titulo + "\n" + "Nota: " + ultimaNota.contenido);
        } else {
            alert("No se realizó ninguna edición.");
        }
    } else if (opcion == 4) {
        eliminarNota();
    } else if (opcion == 0) {
        //Si oprime 0 se hace el break del while y sale del ciclo
        break;
    }
}

function agregarNota() {
    let tituloNota = prompt("¿Cual es el título de la nota que quieres agregar?");
    while (tituloNota == "" || tituloNota == null) {
        tituloNota = prompt("Por favor ingrese algún título");
    }

    let notaAgregada = prompt("Escribe tu nota:");

    //Retorno un objeto con el contenido de la nota
    return { titulo: tituloNota, contenido: notaAgregada };
}

function mostrarNota() {
    if (notas.length === 0) {
        alert("No hay notas para mostrar.");
    } else {
        let mensaje = "Seleccione la nota que desea mostrar:\n";
        for (let i = 0; i < notas.length; i++) {
            mensaje += i + ") " + notas[i].titulo + "\n";
        }

        let indiceSeleccionado = prompt(mensaje);

        while (isNaN(indiceSeleccionado) || indiceSeleccionado < 0 || indiceSeleccionado >= notas.length || indiceSeleccionado === null || indiceSeleccionado === "") {
            indiceSeleccionado = prompt("Por favor, ingresa un índice válido entre 0 y " + (notas.length - 1) + ":");
        }

        let indiceNota = parseInt(indiceSeleccionado);
        let notaSeleccionada = notas[indiceNota];

        alert("Nota seleccionada:\n" + notaSeleccionada.titulo + "\n" + notaSeleccionada.contenido);
    }
}



function editarNota(indice) {
    if (notas.length === 0) {
        alert("No hay notas para editar.");
        return null;
    }

    let indiceNota = parseInt(indice);

    while (isNaN(indiceNota) || indiceNota < 0 || indiceNota >= notas.length) {
        indiceNota = prompt("Por favor, ingresa un índice válido entre 0 y " + (notas.length - 1) + ":");
        indiceNota = parseInt(indiceNota);
    }

    let notaAEditar = notas[indiceNota];
    let nuevaNota = agregarNota();
    
    // Actualizar las propiedades de la nota existente en lugar de crear una nueva
    notaAEditar.titulo = nuevaNota.titulo;
    notaAEditar.contenido = nuevaNota.contenido;

    return notaAEditar;
}

function eliminarNota() {
    if (notas.length === 0) {
        alert("No hay notas para eliminar.");
    } else {
        let mensaje = "Seleccione la nota que desea eliminar:\n";
        for (let i = 0; i < notas.length; i++) {
            mensaje += i + ") " + notas[i].titulo + "\n";
        }

        let indiceSeleccionado = prompt(mensaje);

        while (isNaN(indiceSeleccionado) || indiceSeleccionado < 0 || indiceSeleccionado >= notas.length || indiceSeleccionado === null || indiceSeleccionado === "") {
            indiceSeleccionado = prompt("Por favor, ingresa un índice válido entre 0 y " + (notas.length - 1) + ":");
        }

        let indiceNota = parseInt(indiceSeleccionado);
        let notaEliminada = notas.splice(indiceNota, 1)[0];

        alert("Nota eliminada:\n" + notaEliminada.titulo + "\n" + notaEliminada.contenido);
    }
}
