
var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){
    console.log("Realizó doble click");
    console.log(event.target.remove);
    event.target.parentNode.classList.add(".fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();    
    },1000);
});


