var pacientes = document.querySelectorAll(".paciente");
var titulo1 = document.querySelector(".titulo1");
titulo1.textContent = "Buena Vida Nutrición";

for(var i = 0; i<pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura =  paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");


    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if(!pesoEsValido){
      console.log("Peso incorrecto");
      tdIMC.textContent = "Peso Incorrecto";
      pesoEsValido = false;
      paciente.style.color = "red"
      paciente.style.backgroundColor = "yellow"
      paciente.classList.add("paciente-incorrecto"); //la clase no existe entonces la adiciona a ese objeto.

    }

    if(!alturaEsValida){
      console.log("Altura incorrecta");
      tdIMC.textContent = "Altura Incorrecta";
      alturaEsValida = false;
      paciente.classList.add("paciente-incorrecto");

    }

    if(pesoEsValido && alturaEsValida){
      tdIMC.textContent = calcularIMC(peso,altura);
    }

}    

function calcularIMC(peso,altura){
  var imc = peso / (altura*altura);
  return imc.toFixed(2);
}

function validarPeso (peso){
  if (peso >= 0 && peso < 1000){
    return true;
  } else{
    return false;
    }
}

function validarAltura (altura){
  if (altura >= 0 && altura < 3.00){
    return true;
  } else{
    return false;
    }
}