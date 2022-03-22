// relacionar el boton con JS
var butonBuscar = document.querySelector("#buscar-paciente");

// realcionar el click con la carga de pacinentes
butonBuscar.addEventListener("click", function(){
    //console.log("Buscando un paciente con el click");

    // necesitamos hacer la requesición que está en la pagina API de pacientes:
    // https://alura-es-cursos.github.io/api-pacientes/pacientes.json , son datos
    // listos y accequibles. Para instanciar el objeto necesitamos usar la palabra
    // new. se visualiza un array separados por comas, por llaves y valor.
    // son varios los tipos de datos que podemos transitar:JSON, archivos de texto
    // plano, XML. entre otros.
    var xhr = new XMLHttpRequest;
    // acceder al método que obtiene la DB, abriendo con open y obteniendolo de la
    //url co GET
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    // adionar el evento load: cargar la función
    xhr.addEventListener("load",function(){
        //definir vble para el error
        var errorAjax = document.querySelector("#error-ajax");
        //condición de add paciente sii es exitoso: cod. 200. 
        if(xhr.status == 200){
            //si se da el sms de error de acceso a la página se muestra el span
            //si hay error, sí muestra el span
            errorAjax.classList.add("invisible");
            //imprimir nuestro objeto en la consola: trae los datos de la requisición
            //console.log(xhr.responseText);

            // guardar en una vble la respuesta de la carga o requisición
            var respuesta = xhr.responseText;
            // imprimir la respuesta y el tipo de vble.
            //console.log(respuesta);
            //console.log(typeof respuesta);

            //para el archivo JSON se convierte en la vble respuesta y se asigna a la 
            // vble pacientes y el typo de datos de pacientes. Parceados o convertidos
            // de string en el formato correcto
            var pacientes = JSON.parse(respuesta);
            //console.log(pacientes);
            //console.log(typeof pacientes);
            //iterar entre todos los pacientes.  llamar la función add pcte definido el "form.js"
            //
            pacientes.forEach(function(paciente){
                adicionarPacienteEnLaTabla(paciente);
                console.log(paciente);
            });
            // si no, queremueva el "invisible" para el que usuario vea el sms
            //y que me imprima cual es el error y la respuesta            
        } else {
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
            }
    });
    // luego de abrirlo se re requiere enviarlo
    xhr.send();
});