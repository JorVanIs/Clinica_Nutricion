// es el código que conecta nuestro formulario con JS
var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturaDatosPaciente(form);    

    var errores = validarPaciente(paciente);
    
    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return; 
    }
    
    form.reset ();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
    
});

// función para encapsular la instrucción. 1. adiciona un pcte en la tabla, recibe
// los datos del pcte, contruye la función tr, captura la tabla con doc.Query. y el id
// de latabla. adiciona el pcte tr a la tabla por el appchil.
function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    // Asigno todos los Tr creados en pacienteTr a la tabla. Capturo la tabla
    var tabla = document.querySelector("#tabla-pacientes");
    // se adiciona el paciente tr a la tabla
    tabla.appendChild(pacienteTr);
}

// calcula los valores de los input a las variables. Datos del formulario
function capturaDatosPaciente (form){
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}

function construirTr (paciente) {    
    // Creo la var y la clases para Tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    // la función construirTd (clases y detalles) y asigno hijosTd
    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));    
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function construirTd (dato,clase) {
    // Creo var Td, las clases y datos o valores de las columnas Td creadas
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente (paciente){
    var errores = [];
    if (paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacío");
    }
    if (paciente.peso.length == 0){
        errores.push("El Peso no puede estar vacío");
    }
    if (paciente.altura.length == 0){
        errores.push("La altura no puede estar vacía");        
    }
    if (paciente.gordura.length == 0){
        errores.push("El % de gordura no puede estar vacío");
    }
    if (!validarPeso (paciente.peso)){
        errores.push("Peso es mas que incorrecto");
    }
    if (!validarAltura (paciente.altura)){
        errores.push("La altura es mas que incorrecto");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });    
}